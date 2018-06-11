#version 300 es

layout(location = 0) in vec2 position;
layout(location = 1) in vec2 velocity;
layout(location = 2) in float mass;
layout(location = 3) in uvec2 edgesLoc;

const uint MAX_PYRAMID_LEVELS = 12u; // up to 8192x8192 grid

uniform sampler2D pyramid;
uniform sampler2D grid;
uniform sampler2D positions;
uniform sampler2D edges;

uniform Constants {
    float nodeCount;
    float deltaT;
    float kSpring;
    float kLength;
    float kRepulse;
    float kTheta2;
    float kDrag;
    float kGravity;
};

out vec2 resultPosition;
out vec2 resultVelocity;

const float M_2PI = 6.283185307179586;
const float M_EPS = 0.00001;
const vec2 ZERO = vec2(0., 0.);

vec2 getUniqDirection() {
    float angle = float(gl_VertexID) / nodeCount * M_2PI;

    return vec2(cos(angle), sin(angle));
}

vec2 calcSpringForce(int idx, float weight) {
    if (idx < 0) {
        return ZERO;
    }

    int row = textureSize(positions, 0).x;
    ivec2 coord = ivec2(idx / row, idx / row);

    vec2 anotherPosition = texelFetch(positions, coord, 0).xy;

    vec2 delta = anotherPosition - position;
    float dist2 = dot(delta, delta);

    // TODO: use M_EPS²?
    if (dist2 < M_EPS) {
        delta = 0.01 * getUniqDirection();
        dist2 = 0.0001;
    }

    float diff = 1. - kLength * inversesqrt(dist2);

    return weight * delta * diff;
}

vec2 calcSpringForce() {
    uint row = uint(textureSize(edges, 0).x);

    vec2 force = ZERO;

    // TODO: what about blending in an another step?
    for (uint idx = edgesLoc.x; idx < edgesLoc.y; ++idx) {
        ivec2 coord = ivec2(idx / row, idx % row);
        vec4 edge = texelFetch(edges, coord, 0);

        force += calcSpringForce(int(edge.y), edge.z);
    }

    return kSpring * force;
}

vec2 calcRepulseForce(ivec2 coords) {
    vec3 cell = texelFetch(grid, coords, 0).xyz;

    vec2 cellCenter = cell.xy / cell.z;

    vec2 delta = position - cellCenter;
    float dist = length(delta);

    if (dist < M_EPS) {
        delta = 0.01 * getUniqDirection();
        dist = 0.01;
    }

    return cell.z * delta / (dist * dist * dist);
}

vec2 calcRepulseForce() {
    const uint MAX_STACK_SIZE = 3u * MAX_PYRAMID_LEVELS + 1u;

    struct Node {
        ivec2 coords;
        uint lvlSize;
        uint lvlOffset;
    };

    Node stack[MAX_STACK_SIZE];

    uint lastLvlOffset = uint(textureSize(pyramid, 0).x) - 2u;

    stack[0] = Node(ivec2(0, 1), 2u, lastLvlOffset);
    stack[1] = Node(ivec2(1, 1), 2u, lastLvlOffset);
    stack[2] = Node(ivec2(1, 0), 2u, lastLvlOffset);
    stack[3] = Node(ivec2(0, 0), 2u, lastLvlOffset);

    uint sp = 4u;

    vec2 force = ZERO;

    while (sp > 0u) {
        Node node = stack[--sp];

        vec4 region = texelFetch(pyramid, ivec2(node.lvlOffset, 0u) + node.coords, 0);
        float regionMass = region.z;

        if (regionMass < M_EPS) {
            continue;
        }

        vec2 regionCenter = region.xy / regionMass;

        vec2 delta = position - regionCenter;
        float dist2 = dot(delta, delta);

        if (region.w < kTheta2 * dist2) {
            force += regionMass * delta / pow(dist2, 1.5);
        } else if (node.lvlOffset == 0u) {
            ivec2 base = 4 * node.coords;

            force += calcRepulseForce(base + ivec2(0, 1))
                   + calcRepulseForce(base + ivec2(1, 1))
                   + calcRepulseForce(base + ivec2(1, 0))
                   + calcRepulseForce(base);
        } else {
            ivec2 base = 4 * node.coords;
            uint lvlSize = 2u * node.lvlSize;
            uint lvlOffset = node.lvlOffset - lvlSize;

            stack[sp++] = Node(base + ivec2(0, 1), lvlSize, lvlOffset);
            stack[sp++] = Node(base + ivec2(1, 1), lvlSize, lvlOffset);
            stack[sp++] = Node(base + ivec2(1, 0), lvlSize, lvlOffset);
            stack[sp++] = Node(base, lvlSize, lvlOffset);
        }
    }

    return kRepulse * mass * force;
}

vec2 calcDragForce() {
    return -kDrag * velocity;
}

vec2 calcGravityForce() {
    return -kGravity * mass * normalize(position);
}

void main() {
    vec2 force = calcSpringForce() + calcRepulseForce() + calcDragForce() + calcGravityForce();

    vec2 deltaV = force / mass * deltaT;

    vec2 resultVelocity = velocity + deltaV;

    float dist2 = dot(resultVelocity, resultVelocity);

    if (dist2 > 1.) {
        resultVelocity *= inversesqrt(dist2);
    }

    // TODO: investigate integration methods.
    resultPosition += resultVelocity * deltaT;

    int row = textureSize(positions, 0).x;
    vec2 coords = 2. * vec2(gl_VertexID / row, gl_VertexID % row) / float(row) - 1.;

    // TODO: store positions in a texture.
    gl_Position = vec4(coords, 0., 1.);
}

#version 300 es

layout(location = 0) in vec2 position;
layout(location = 1) in float mass;

uniform vec4 viewport;

flat out float nodeMass;
flat out int nodeIdx;

void main() {
    nodeMass = mass;
    nodeIdx = gl_VertexID;

    vec2 halfSize = .5 * viewport.zw;
    vec2 cell = (position - viewport.xy - halfSize) / halfSize;

    gl_Position = vec4(cell, 0., 1.);
}

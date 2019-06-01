#version 300 es

layout(location = 0) in vec2 corner;

uniform vec2 invShape;
uniform sampler2D positions;

const float SIZE = 5.;

void main() {
    int idx = gl_VertexID / 6;
    int row = textureSize(positions, 0).x;
    ivec2 coord = ivec2(idx % row, idx / row);

    vec2 center = texelFetch(positions, coord, 0).xy;

    vec2 position = (center + corner * SIZE) * invShape * 2.;

    gl_Position = vec4(position, 0., 1.);
}

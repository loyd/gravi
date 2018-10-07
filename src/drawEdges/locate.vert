#version 300 es

layout(location = 0) in uint endpoint;

uniform vec2 invShape;
uniform sampler2D positions;

void main() {
    uint row = uint(textureSize(positions, 0).x);
    ivec2 coord = ivec2(endpoint % row, endpoint / row);

    vec2 position = texelFetch(positions, coord, 0).xy * invShape * 2.;

    gl_Position = vec4(position, 0., 1.);
}

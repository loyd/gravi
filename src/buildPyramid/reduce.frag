#version 300 es

// TODO: what about highp precision?
precision mediump float;

uniform sampler2D level;

out vec4 result;

void main() {
    ivec2 coord = 2 * ivec2(gl_FragCoord.xy);

    result = texelFetch(level, coord, 0)
           + texelFetch(level, coord + ivec2(1, 0), 0)
           + texelFetch(level, coord + ivec2(0, 1), 0)
           + texelFetch(level, coord + ivec2(1, 1), 0);
}

#version 300 es

layout(location = 0) in vec2 corner;

uniform vec2 invShape;
uniform sampler2D grid;
uniform sampler2D positions;

const vec2 SIZE = vec2(45., 13.);

void main() {
    int cellIdx = gl_VertexID / 6;
    int gridRow = textureSize(grid, 0).x;
    ivec2 gridCoord = ivec2(cellIdx % gridRow, cellIdx / gridRow);

    int nodeIdx = int(texelFetch(grid, gridCoord, 0).x);

    if (nodeIdx == -1) {
        gl_Position = vec4(4., 4., 4., 1.);
        return;
    }

    int posRow = textureSize(positions, 0).x;
    ivec2 posCoord = ivec2(nodeIdx % posRow, nodeIdx / posRow);

    vec2 center = texelFetch(positions, posCoord, 0).xy;
    vec2 position = (center - vec2(0., 30.) + corner * SIZE) * invShape * 2.;

    gl_Position = vec4(position, 0., 1.);
}

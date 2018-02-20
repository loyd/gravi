#version 300 es

layout(location = 0) in vec2 position;
layout(location = 1) in float mass;

uniform sampler2D bounds;
uniform vec2 invShape;
uniform vec2 border;

out vec4 result;

void main() {
    vec4 minmax = texelFetch(bounds, ivec2(0, 0), 0);

    vec2 space = minmax.zw - minmax.xy;
    vec2 area = space * invShape;

    result = vec4(position * mass, mass, area.x * area.y);

    // (x_min, y_min) --> (-1, -1)
    // (x_max, y_max) --> ( 1,  1)
    vec2 halfSize = .5 * space;

    vec2 cell = (position - minmax.xy - halfSize) / halfSize;

    gl_Position = vec4(clamp(cell, -border, border), 0., 1.);
}

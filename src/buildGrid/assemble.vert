#version 300 es

layout(location = 0) in vec2 position;
layout(location = 1) in float mass;

uniform sampler2D bounds;
uniform vec2 border;

out vec3 result;

void main() {
    result = vec3(position * mass, mass);

    vec4 minmax = texelFetch(bounds, ivec2(0, 0), 0);

    // (x_min, y_min) --> (-1, -1)
    // (x_max, y_max) --> ( 1,  1)
    vec2 halfSize = .5 * (minmax.zw - minmax.xy);

    vec2 cell = (position - minmax.xy - halfSize) / halfSize;

    gl_Position = vec4(clamp(cell, -border, border), 0., 1.);
}

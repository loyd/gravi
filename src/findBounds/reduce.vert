#version 300 es

layout(location = 0) in vec4 a;
layout(location = 1) in vec4 b;
layout(location = 2) in vec4 c;
layout(location = 3) in vec4 d;

out vec4 result;

void main() {
    vec2 mn = min(min(a.xy, b.xy), min(c.xy, d.xy));
    vec2 mx = max(max(a.zw, b.zw), max(c.zw, d.zw));

    result = vec4(mn, mx);

    gl_Position = vec4(0., 0., 0., 1.);
}

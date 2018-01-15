#version 300 es

layout(location = 0) in vec2 a;
layout(location = 1) in vec2 b;
layout(location = 2) in vec2 c;
layout(location = 3) in vec2 d;

uniform int N;

out vec4 result;

vec4 minmax(vec2 a, vec2 b, vec2 c, vec2 d) {
    vec2 mn = min(min(a, b), min(c, d));
    vec2 mx = max(max(a, b), max(c, d));

    return vec4(mn, mx);
}

const float INF = 1./0.;
const vec2 MIN = vec2(-INF, -INF);
const vec2 MAX = vec2( INF,  INF);

void main() {
    // `extra` specifies how much attributes are missing.
    //
    // Example:
    //  N = 9
    //
    // vID   a b c d
    // ---   -------
    //  0 <- 0 1 2 3    // extra = 0
    //  1 <- 4 5 6 7    // extra = 0
    //  2 <- 8 * * *    // extra = 3
    //  3 <- * * * *    // extra = 4
    int extra = clamp(4 * (1 + gl_VertexID) - N, 0, 4);

    if (extra == 4) {
        result = vec4(MAX, MIN);
    } else {
        result = minmax(
            a,
            // TODO: what about avoiding the branch?
            extra <= 2 ? b : a,
            extra <= 1 ? c : a,
            extra == 0 ? d : a
        );
    }

    gl_Position = vec4(0., 0., 0., 1.);
}

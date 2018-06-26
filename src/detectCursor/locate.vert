#version 300 es

layout(location = 0) in vec2 position;

uniform vec2 cursor;

// TODO: move to the constants.
const float SIZE = 10.;

flat out int id;

void main() {
    id = gl_VertexID;
    gl_Position = vec4((position - cursor) / SIZE, 0., 1.);
}

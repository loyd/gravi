#version 300 es

precision highp float;

flat in int id;
out vec4 result;

void main() {
    result = vec4(id, 0., 0., 1.);
}

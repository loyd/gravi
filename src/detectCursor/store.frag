#version 300 es

precision highp float;

flat in int id;

// TODO: is it possible to read from RED texture and use here float?
out vec4 result;

void main() {
    result = vec4(id);
}

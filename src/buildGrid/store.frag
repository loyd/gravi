#version 300 es

// TODO: what about highp precision?
precision mediump float;

in vec3 result;
out vec4 outResult;

void main() {
    outResult = vec4(result, 1.);
}

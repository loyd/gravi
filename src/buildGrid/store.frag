#version 300 es

// TODO: what about highp precision?
precision mediump float;

in vec4 result;
out vec4 outResult;

void main() {
    outResult = result;
}

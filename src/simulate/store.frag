#version 300 es

// TODO: what about highp precision?
precision mediump float;

in vec2 resultPosition;
out vec2 result;

void main() {
    result = resultPosition;
}

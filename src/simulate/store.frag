#version 300 es

// TODO: highp vs mediump precision.
precision highp float;

flat in vec2 resultPosition;
out vec2 result;

void main() {
    result = resultPosition;
}

#version 300 es

precision highp float;

flat in float nodeMass;
flat in int nodeIdx;

out float result;

void main() {
    // TODO: also use mass.
    result = float(nodeIdx);
}

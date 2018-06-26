import PicoGL from 'picogl';

import detectCursor from '../src/detectCursor';
import {createApp, createFloatTexture, readFromTexture, round} from './helpers';

const FAR = 1024;
const SIZE = 10;

describe('detectCursor step', () => {
    it('should not detect in the empty case', () => {
        test([], [10, 10], [0, 0, 0, 0]);
    });

    it('should not detect in the outside case', () => {
        test([FAR, FAR], [10, 10], [0, 0, 0, 0]);
    });

    it('should detect in the exact case', () => {
        test([10, 10], [10, 10], [0, 0, 0, 1]);
        test([FAR, FAR, 10, 10], [10, 10], [1, 0, 0, 1]);
    });

    it('should detect in the near case', () => {
        test([FAR, FAR, 10 + SIZE/2, 10 + SIZE/2], [10, 10], [1, 0, 0, 1]);
        test([FAR, FAR, 10 - SIZE/2, 10 - SIZE/2], [10, 10], [1, 0, 0, 1]);
    });

    it('should detect in the corner case', () => {
        test([FAR, FAR, 10 + SIZE*0.99, 10 + SIZE*0.99], [10, 10], [1, 0, 0, 1]);
    });

    it('should detect in the overlap case', () => {
        test([
            10 + SIZE/2, 10 + SIZE/2,
            10 - SIZE/2, 10 - SIZE/2,
            10 + SIZE/2, 10 - SIZE/2,
        ], [10, 10], [2, 0, 0, 1]);
    });
});

function test(positions, cursor, expected) {
    const app = createApp();

    const positionsBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(positions));
    const result = createFloatTexture(app, 1, 1, 4);

    detectCursor(app)(positionsBuf, cursor, result);

    expect(app.gl.getError()).toBe(0);

    const actual = readFromTexture(app, result);

    expect(actual.map(round)).toEqual(expected.map(round));
}

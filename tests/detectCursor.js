import PicoGL from 'picogl';

import detectCursor from '../src/detectCursor';
import {createApp, createFloatTexture, readFromTexture, round} from './helpers';

const FAR = 1024;
const SIZE = 10;

describe('detectCursor step', () => {
    it('should not detect in the empty case', () => {
        test([], [10, 10], -1);
    });

    it('should not detect in the outside case', () => {
        test([FAR, FAR], [10, 10], -1);
    });

    it('should detect in the exact case', () => {
        test([10, 10], [10, 10], 0);
        test([FAR, FAR, 10, 10], [10, 10], 1);
    });

    it('should detect in the near case', () => {
        test([FAR, FAR, 10 + SIZE/2, 10 + SIZE/2], [10, 10], 1);
        test([FAR, FAR, 10 - SIZE/2, 10 - SIZE/2], [10, 10], 1);
    });

    it('should detect in the corner case', () => {
        test([FAR, FAR, 10 + SIZE*0.99, 10 + SIZE*0.99], [10, 10], 1);
    });

    it('should detect in the overlap case', () => {
        test([
            10 + SIZE/2, 10 + SIZE/2,
            10 - SIZE/2, 10 - SIZE/2,
            10 + SIZE/2, 10 - SIZE/2,
        ], [10, 10], 2);
    });
});

function test(positions, cursor, expected) {
    const app = createApp();

    const positionsBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(positions));

    const actual = detectCursor(app)(positionsBuf, cursor);

    expect(app.gl.getError()).toBe(0);

    expect(actual).toEqual(expected);
}

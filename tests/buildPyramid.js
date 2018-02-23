import PicoGL from 'picogl';

import buildPyramid from '../src/buildPyramid';
import {createApp, createFloatTexture, readFromTexture} from './helpers';

describe('buildPyramid step', () => {
    it('', () => {
        test([
            1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,
            2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,

            1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,
            2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,

            1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,
            2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,

            1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,  1,1,1,1, 2,2,2,2,
            2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,  2,2,2,2, 1,1,1,1,
        ], [
            6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,      24,24,24,24,  24,24,24,24,
            6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,      24,24,24,24,  24,24,24,24,

            6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,       0, 0, 0, 0,   0, 0, 0, 0,
            6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,       0, 0, 0, 0,   0, 0, 0, 0,
        ]);
    });
});

function test(grid, expected) {
    const app = createApp();

    const gridSize = Math.sqrt(grid.length / 4);
    const gridTex = createFloatTexture(app, gridSize, gridSize, 4).data(new Float32Array(grid));

    const pyramid = createFloatTexture(app, gridSize - 2, gridSize / 2, 4);

    buildPyramid(app)(gridTex, pyramid);

    expect(app.gl.getError()).toBe(0);

    const actual = readFromTexture(app, pyramid);

    expect(actual).toEqual(expected);
}

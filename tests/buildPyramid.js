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
            [
                6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,
                6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,

                6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,
                6,6,6,6, 6,6,6,6,  6,6,6,6, 6,6,6,6,
            ],
            [
                24,24,24,24,  24,24,24,24,
                24,24,24,24,  24,24,24,24,
            ],
            [
                96,96,96,96,
            ],
        ])
    });
});

function test(grid, expected) {
    const app = createApp();

    const gridSize = Math.sqrt(grid.length / 4);
    const gridTex = createFloatTexture(app, gridSize, gridSize, 4).data(new Float32Array(grid));

    const levels = expected.map(data => {
        const size = Math.sqrt(data.length / 4);
        return createFloatTexture(app, size, size, 4);
    });

    buildPyramid(app)(gridTex, levels);

    expect(app.gl.getError()).toBe(0);

    levels.forEach((level, i) => {
        const actual = readFromTexture(app, level);
        expect(actual).toEqual(expected[i]);
    });
}

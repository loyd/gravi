import PicoGL from 'picogl';

import buildGrid from '../src/buildGrid';
import {createApp, createFloatTexture, readFromTexture, round} from './helpers';

describe('buildGrid step', () => {
    it('should mix particles together', () => {
        test([
            -2, -2, .5,
            -2, 2, .5,
            -1, -1, 2,
            -1, 1, .5,
            0, 0, 1,
            1, 1, 2,
            1, -1, .5,
            2, 2, .5,
            2, -2, .5,
        ], [-9, -9, 9, 9], [
            0,0,0,0, 0,0,0,0, 0,0,0,0,
            0,0,0,0, 0,0,8,36,0,0,0,0,
            0,0,0,0, 0,0,0,0, 0,0,0,0,
        ]);
    });

    it('should mix particles together with scalene grids', () => {
        test([
            -2, -2, .5,
            -2, 2, .5,
            -1, -1, 2,
            -1, 1, .5,
            0, 0, 1,
            1, 1, 2,
            1, -1, .5,
            2, 2, .5,
            2, -2, .5,
        ], [-9, -15, 9, 15], [
            0,0,0,0, 0,0,0,0, 0,0,0,0,
            0,0,0,0, 0,0,8,60,0,0,0,0,
            0,0,0,0, 0,0,0,0, 0,0,0,0,
        ]);
    });

    it('should handle evenly distributed particles', () => {
        test([
            -5, -2, .5,
            -5, 5, .5,
            -1, -1, 2,
            -6, 2, .5,
            0, 0, 1,
            5, 4, 2,
            9, -2, .5,
            4, -9, .5,
            3, -2, .5,
        ], [-9, -9, 9, 9], [
            0,0,0,0, 0,0,0,0, 2,-4.5,0.5,36,
            -5.5,0,1,36, -2,-2,3,36, 6,-2,1,36,
            -2.5,2.5,0.5,36, 0,0,0,0, 10,8,2,36,
        ]);
    });

    it('should map marginal particles (5x5)', () => testMarginals(5));
    it('should map marginal particles (6x6)', () => testMarginals(6));
    it('should map marginal particles (25x25)', () => testMarginals(25));
    it('should map marginal particles (100x100)', () => testMarginals(100));
    it('should map marginal particles (512x512)', () => testMarginals(512));
});

function test(data, bounds, expected, size = 3) {
    const app = createApp();

    const positions = [];
    const masses = [];

    data.forEach((x, i) => (i % 3 < 2 ? positions : masses).push(x));

    const positionsBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(positions));
    const massesBuf = app.createVertexBuffer(PicoGL.FLOAT, 1, new Float32Array(masses));
    const boundsTex = createFloatTexture(app, 1, 1, 4).data(new Float32Array(bounds));
    const result = createFloatTexture(app, size, size, 4);

    buildGrid(app)(positionsBuf, massesBuf, boundsTex, result);

    expect(app.gl.getError()).toBe(0);

    const actual = readFromTexture(app, result);

    expect(actual.map(round)).toEqual(expected.map(round));
}

function testMarginals(n) {
    const expected = Array.from(Array(4 * n * n), _ => 0);

    const area = (18 / n)**2;

    expected.splice(0, 4, -9, -9, 1, area);
    expected.splice(4*(n/2|0), 4, 0, -9, 1, area);
    expected.splice(4*(n-1), 4, 9, -9, 1, area);

    const mid = n * ((n-1)/2|0);
    expected.splice(4*mid, 4, -9, 0, 1, area);
    expected.splice(4*(mid + n-1), 4, 9, 0, 1, area);

    const last = n * (n-1);
    expected.splice(4*last, 4, -9, 9, 1, area);
    expected.splice(4*(last + n/2|0), 4, 0, 9, 1, area);
    expected.splice(4*(last + n-1), 4, 9, 9, 1, area);

    test([
        -9, -9, 1,
        0, -9, 1,
        9, -9, 1,
        9, 0, 1,
        9, 9, 1,
        0, 9, 1,
        -9, 9, 1,
        -9, 0, 1,
    ], [-9, -9, 9, 9], expected, n);
}

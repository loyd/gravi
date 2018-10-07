import PicoGL from 'picogl';

import findBounds from '../src/findBounds';
import {createApp, createFloatTexture, readFromTexture} from './helpers';

describe('findBounds step', () => {
    // If you want to get more info about "extra", you should read comments in "intro" shader.
    it('uses no middle buffers for 1 item, 3 extra', () => {
        test([1, 2], 2, 1);
        test([1, 2, 1], 3, 1);
        test([1, 2, 3, 4], 4, 1);
    });

    it('uses no middle buffers for 2 items, 2 extra', () => {
        test([-1, 1, -2, 2], 2, 1);
        test([-2, 1, 7, -1, 2, 7], 3, 1);
        test([-2, 1, 7, 0, -1, 2, 7, 0], 4, 1);
    });

    it('uses no middle buffers for 3 items, 1 extra', () => {
        test([-1, 1, -2, 2, -3, 5], 2, 1);
        test([-2, 1, 7, -1, 2, 7, 2, 3, 0], 3, 1);
        test([-2, 1, 7, 0, -1, 2, 7, 2, 2, 3, 0, -5], 4, 1);
    });

    it('uses no middle buffers for 4 items', () => {
        test([-1, 1, -2, 2, -3, -3, 5, 7], 2, 1);
        test([-1, 1, 2, -2, 2, 3, -3, -3, 1, 5, 7, 0], 3, 1);
        test([-1, 1, 2, 0, -2, 2, 3, 1, -3, -3, 1, 2, 5, 7, 0, -2], 4, 1);
    });

    it('uses one middle buffer for 5 items, 3 & 4 extra', () => {
        test([-1, 1, -2, 2, -3, -3, 5, 7, 2, 4], 2, 2);
        test([-1, 1, 2, -2, 2, 3, -3, -3, 1, 5, 7, 0, 2, 4, 5], 3, 2);
        test([-1, 1, 2, 0, -2, 2, 3, 1, -3, -3, 1, 2, 5, 7, 0, -2, 2, 4, 5, 7], 4, 2);
    });

    it('uses one middle buffer for 14 items, 2 extra', () => {
        test([
            3, 2, 2, 1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9, 8, 10, 1, 6, -2, 2, 3, 2, 2,
            1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9,
        ], 3, 2);
    });

    it('uses one middle buffer for 15 items, 1 extra', () => {
        test([
            3, 2, 2, 1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9, 8, 10, 1, 6, -2, 2, 3, 2, 2,
            1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9, 8, 10, 1,
        ], 3, 2);
    });

    it('uses one middle buffer for 16 items', () => {
        test([
            3, 2, 2, 1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9, 8, 10, 1, 6, -2, 2, 3, 2, 2,
            1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9, 8, 10, 1, 2, 1, 3,
        ], 3, 2);
    });

    it('uses two middle buffers for 17 items, 3 & 4 extra', () => {
        test([
            3, 2, 2, 1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9, 8, 10, 1, 6, -2, 2, 3, 2, 2,
            1, 0, 1, 4, 0, 3, 5, -3, 2, 7, 5, 2, 2, 3, 9, 8, 10, 1, 2, 1, 3, -5, 4, -10,
        ], 3, 3);
    });

    it('uses two middle buffer for random 99 items, 1 & 4 extra', () => {
        test(generateRandomLst(99 * 2), 2, 4);
        test(generateRandomLst(99 * 4), 4, 4);
    });

    it('uses two middle buffer for random 501 items, 3 & 4 extra', () => {
        test(generateRandomLst(501 * 2), 2, 5);
        test(generateRandomLst(501 * 4), 4, 5);
    });

    it('uses two middle buffer for random 2018 items, 2 & 4 extra', () => {
        test(generateRandomLst(2018 * 2), 2, 6);
        test(generateRandomLst(2018 * 4), 4, 6);
    });
});

function test(lst, itemSize, expectedStepCount) {
    const app = createApp();
    const items = createVbo(app, lst, itemSize);
    const result = createFloatTexture(app, 1, 1, 4);

    const stepCount = findBounds(app)(items, result);

    expect(app.gl.getError()).toBe(0);
    expect(stepCount).toBe(expectedStepCount);

    const x = lst.filter((_, i) => i % itemSize === 0);
    const y = lst.filter((_, i) => i % itemSize === 1);

    const expected = [
        Math.min(...x), Math.min(...y),
        Math.max(...x), Math.max(...y),
    ];

    expect(readFromTexture(app, result)).toEqual(expected);
}

function createVbo(app, lst, itemSize) {
    const numItems = lst.length / itemSize;
    expect(Number.isInteger(numItems)).toBeTruthy();

    const nearestPowerOf4th = 4 ** Math.max(Math.ceil(.5 * Math.log2(numItems)), 1);
    const vbo = app.createVertexBuffer(PicoGL.FLOAT, itemSize, nearestPowerOf4th * itemSize);

    vbo.data(new Float32Array(lst));
    vbo.numItems = numItems;

    return vbo;
}

function generateRandomLst(length) {
    return Array.from(Array(length), () => Math.random() * 50 - 25 | 0);
}

import PicoGL from 'picogl';

export const noopFrag = '#version 300 es\nvoid main() {}';

export const log4 = x => .5 * Math.log2(x);

export const isPowerOf2 = x => (x & (x - 1)) === 0;

const FLOAT_FORMATS_BY_ITEM_SIZE = {
    3: [PicoGL.RGB,  PicoGL.RGB32F],
    4: [PicoGL.RGBA, PicoGL.RGBA32F],
};

export const isFloatTexture = (tex, itemSize) => (
    tex.type === PicoGL.FLOAT &&
    tex.format === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][0] &&
    tex.internalFormat === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][1]
);

export function invariant(expr) {
    if (!expr) {
        const error = new Error;
        error.name = 'AssertionError';
        throw error;
    }
}

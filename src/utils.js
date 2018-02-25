import PicoGL from 'picogl';

export const noopFrag = '#version 300 es\nvoid main() {}';

export const log4 = x => .5 * Math.log2(x);

export const isPowerOf2 = x => (x & (x - 1)) === 0;

const FLOAT_FORMATS_BY_ITEM_SIZE = {
    2: [PicoGL.RG,   PicoGL.RG32F],
    3: [PicoGL.RGB,  PicoGL.RGB32F],
    4: [PicoGL.RGBA, PicoGL.RGBA32F],
};

export const isFloatTexture = (tex, itemSize) => (
    tex.type === PicoGL.FLOAT &&
    tex.format === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][0] &&
    tex.internalFormat === FLOAT_FORMATS_BY_ITEM_SIZE[itemSize][1]
);

export const isFloatBuffer = (buf, itemSize) => (
    buf.type === PicoGL.FLOAT &&
    buf.itemSize == itemSize
);

export const isUnsignedBuffer = (buf, itemSize) => (
    buf.type === PicoGL.UNSIGNED &&
    buf.itemSize == itemSize
);

export function createFloatTexture(app, width, height, itemSize) {
    const [format, internalFormat] = FLOAT_FORMATS_BY_ITEM_SIZE[itemSize];

    return app.createTexture2D(width, height, {
        type: PicoGL.FLOAT,
        format,
        internalFormat,
    });
}

export function invariant(expr) {
    if (!expr) {
        const error = new Error;
        error.name = 'AssertionError';
        throw error;
    }
}

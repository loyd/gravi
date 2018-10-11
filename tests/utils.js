import PicoGL from 'picogl';

import {
    log4, isPowerOf2, nearestPowerOfTwo, nearestPowerOfFour,
    isFloatTexture, isFloatBuffer, isUnsignedBuffer,
    createFloatTexture,
} from '../src/utils';

describe('log4', () => {
    it('should calculate log₄ function', () => {
        expect(log4(1)).toBe(0);
        expect(log4(0)).toBe(-Infinity);
        expect(log4(4)).toBe(1);
        expect(log4(256)).toBe(4);
    });
});

describe('nearestPowerOfTwo', () => {
    it('should calculate the nearest power of 2', () => {
        expect(nearestPowerOfTwo(0)).toBe(2);
        expect(nearestPowerOfTwo(1)).toBe(2);
        expect(nearestPowerOfTwo(3)).toBe(4);
        expect(nearestPowerOfTwo(4)).toBe(4);
        expect(nearestPowerOfTwo(5)).toBe(8);
    });
});

describe('nearestPowerOfFour', () => {
    it('should calculate the nearest power of 4', () => {
        expect(nearestPowerOfFour(0)).toBe(4);
        expect(nearestPowerOfFour(1)).toBe(4);
        expect(nearestPowerOfFour(3)).toBe(4);
        expect(nearestPowerOfFour(4)).toBe(4);
        expect(nearestPowerOfFour(5)).toBe(16);
    });
});

describe('isPowerOf2', () => {
    it('should detect only powers of two', () => {
        expect(isPowerOf2(0)).toBe(true);
        expect(isPowerOf2(1)).toBe(true);
        expect(isPowerOf2(2)).toBe(true);
        expect(isPowerOf2(42)).toBe(false);
        expect(isPowerOf2(512)).toBe(true);
        expect(isPowerOf2(513)).toBe(false);
    });
});

describe('isFloatTexture', () => {
    it('should determine float textures', () => {
        const app = PicoGL.createApp(document.createElement('canvas'))
            .floatRenderTargets();

        const unsignedTex = app.createTexture2D(32, 32);
        const floatTex = app.createTexture2D(32, 32, {
            type: PicoGL.FLOAT,
            internalFormat: PicoGL.RGBA32F,
        });

        expect(isFloatTexture(unsignedTex, 4)).toBe(false);
        expect(isFloatTexture(floatTex, 4)).toBe(true);
    });
});

describe('isFloatBuffer and isUnsignedBuffer', () => {
    it('should determine float buffers', () => {
        const app = PicoGL.createApp(document.createElement('canvas'))
            .floatRenderTargets();

        const unsignedBuf = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 2, new Uint32Array(2));
        const floatBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(2));

        expect(isFloatBuffer(unsignedBuf, 2)).toBe(false);
        expect(isFloatBuffer(floatBuf, 2)).toBe(true);
        expect(isUnsignedBuffer(unsignedBuf, 2)).toBe(true);
        expect(isUnsignedBuffer(floatBuf, 2)).toBe(false);
    });
});

describe('createFloatTexture', () => {
    it('should determine float buffers', () => {
        const app = PicoGL.createApp(document.createElement('canvas'))
            .floatRenderTargets();

        const tex = createFloatTexture(app, 32, 32, 2);

        expect(isFloatTexture(tex, 2)).toBe(true);
    });
});

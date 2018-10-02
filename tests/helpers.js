import PicoGL from 'picogl';

export function createApp() {
    const canvas = document.createElement('canvas');

    const app = PicoGL.createApp(canvas);

    app.floatRenderTargets();

    return app;
}

const FLOAT_FORMATS_BY_ITEM_SIZE = {
    2: [PicoGL.RG,   PicoGL.RG32F],
    3: [PicoGL.RGB,  PicoGL.RGB32F],
    4: [PicoGL.RGBA, PicoGL.RGBA32F],
};

export function createFloatTexture(app, width, height, itemSize) {
    const [format, internalFormat] = FLOAT_FORMATS_BY_ITEM_SIZE[itemSize];

    return app.createTexture2D(width, height, {
        type: PicoGL.FLOAT,
        format,
        internalFormat,
    });
}

export function readFromBuffer({gl}, buffer) {
    gl.bindBuffer(buffer.binding, buffer.buffer);

    const result = new Float32Array(buffer.numItems * buffer.itemSize);
    gl.getBufferSubData(buffer.binding, 0, result);

    gl.bindBuffer(buffer.binding, null);

    return Array.from(result);
}

export function readFromTexture(app, texture) {
    const fb = app.createFramebuffer().colorTarget(0, texture);
    app.readFramebuffer(fb);

    const itemSize = texture.format === PicoGL.RGBA ? 4
                   : texture.format === PicoGL.RGB ? 3
                   : texture.format === PicoGL.RG ? 2
                   : 0;

    expect(itemSize).toBeGreaterThan(0);

    const result = new Float32Array(4 * texture.width * texture.height);
    app.gl.readPixels(0, 0, texture.width, texture.height, PicoGL.RGBA, PicoGL.FLOAT, result);

    app.defaultReadFramebuffer();

    if (itemSize < 4) {
        const final = [];

        for (let i = 0; i < result.length; i += 4) {
            final.push(...result.subarray(i, i + itemSize));
        }

        return final;
    }

    return Array.from(result);
}

export function round(v) {
    return Math.round(v * 1000) / 1000;
}

import PicoGL from 'picogl';

export function createApp() {
    const canvas = document.createElement('canvas');
    return PicoGL.createApp(canvas);
}

export function createFloatTexture(app, width, height, itemSize) {
    app.floatRenderTargets();

    const [format, internalFormat] = itemSize === 4 ? [PicoGL.RGBA, PicoGL.RGBA32F]
                                   : itemSize === 3 ? [PicoGL.RGB, PicoGL.RGB32F]
                                   : null;

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

    const itemSize = texture.format === PicoGL.RGBA ? 4 : 3;
    const result = new Float32Array(itemSize * texture.width * texture.height);
    app.gl.readPixels(0, 0, texture.width, texture.height, PicoGL.RGBA, PicoGL.FLOAT, result);

    app.defaultReadFramebuffer();

    return Array.from(result);
}

export function round(v) {
    return Math.round(v * 1000) / 1000;
}

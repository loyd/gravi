import PicoGL from 'picogl';

export function createApp() {
    const canvas = document.createElement('canvas');
    return PicoGL.createApp(canvas);
}

export function createFloatTexture(app, width, height) {
    app.floatRenderTargets();
    expect(app.floatRenderTargetsEnabled).toBeTruthy();

    return app.createTexture2D(width, height, {
        type: PicoGL.FLOAT,
        internalFormat: PicoGL.FLOAT32F,
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

    const result = new Float32Array(4 * texture.width * texture.height);
    app.gl.readPixels(0, 0, texture.width, texture.height, PicoGL.RGBA, PicoGL.FLOAT, result);

    app.defaultReadFramebuffer();

    return Array.from(result);
}

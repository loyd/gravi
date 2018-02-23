import PicoGL from 'picogl';

import {invariant, isPowerOf2, isFloatTexture} from '../utils';

import quadVert from './quad.vert';
import reduceFrag from './reduce.frag';

const QUAD = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);

export default function (app) {
    invariant(app.floatRenderTargetsEnabled);

    const {gl} = app;

    const mark = Symbol();

    const prog = app.createProgram(quadVert, reduceFrag);

    const buf = app.createVertexBuffer(PicoGL.FLOAT, 2, QUAD);
    const vao = app.createVertexArray().vertexAttributeBuffer(0, buf);
    const call = app.createDrawCall(prog, vao, PicoGL.TRIANGLE_STRIP);

    const texOptions = {
        type: PicoGL.FLOAT,
        format: PicoGL.RGBA,
        internalFormat: PicoGL.RGBA32F,
    };

    return (grid, result) => {
        invariant(grid.width === grid.height);
        invariant(grid.width >= 8);
        invariant(isPowerOf2(grid.width));
        invariant(grid.width === result.width + 2);
        invariant(grid.height === 2 * result.height);
        invariant(isFloatTexture(grid, 4));
        invariant(isFloatTexture(result, 4));

        let interim = grid[mark];

        if (!interim) {
            const texA = app.createTexture2D(grid.width / 2, grid.height / 2, texOptions);
            const texB = app.createTexture2D(grid.width / 4, grid.height / 4, texOptions);

            const fbA = app.createFramebuffer().colorTarget(0, texA);
            const fbB = app.createFramebuffer().colorTarget(0, texB);

            interim = grid[mark] = {texA, texB, fbA, fbB};
        }

        const {texA, texB, fbA, fbB} = interim;

        // grid --> texA --> texB --> texA --> ..
        let activeFb = fbA;
        let activeTex = grid;

        for (let size = grid.width / 2, offset = 0; size > 1; offset += size, size /= 2) {
            app
                .readFramebuffer(activeFb)
                .drawFramebuffer(activeFb)
                .viewport(0, 0, size, size);

            call
                .texture('level', activeTex)
                .draw();

            // TODO: how much does copying cost?
            gl.bindTexture(gl.TEXTURE_2D, result.texture);
            gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, offset, 0, 0, 0, size, size);

            activeFb = activeFb === fbA ? fbB : fbA;
            activeTex = activeTex === texA ? texB : texA;
        }
    };
}

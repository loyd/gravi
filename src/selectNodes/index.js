import PicoGL from 'picogl';

import {invariant, isFloatTexture, isFloatBuffer} from '../utils';

import assembleVert from './assemble.vert';
import selectFrag from './select.frag';

export default function (app) {
    invariant(app.floatRenderTargetsEnabled);

    const mark = Symbol();

    const prog = app.createProgram(assembleVert, selectFrag);

    return (positions, masses, viewport, result) => {
        let call = positions[mark];

        if (!call) {
            invariant(isFloatBuffer(positions, 2));
            invariant(isFloatBuffer(masses, 1));
            invariant(positions.numItems === masses.numItems);

            const vao = app.createVertexArray()
                .vertexAttributeBuffer(0, positions)
                .vertexAttributeBuffer(1, masses);

            call = positions[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
        }

        let fb = result[mark];

        if (!fb) {
            invariant(isFloatTexture(result, 1));

            fb = result[mark] = app.createFramebuffer()
                .colorTarget(0, result);
        }

        invariant(viewport.length === 4);

        call
            .uniform('viewport', viewport);

        app
            .drawFramebuffer(fb)
            .viewport(0, 0, result.width, result.height)
            .clearMask(PicoGL.COLOR_BUFFER_BIT)
            .clearColor(-1, -1, -1, -1)
            .clear()
            .blendFunc(PicoGL.ONE, PicoGL.ONE)
            .blend();

        app.gl.blendEquation(app.gl.MAX);

        call.draw();

        app.gl.blendEquation(app.gl.FUNC_ADD);
        app.noBlend();
    };
}

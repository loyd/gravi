import PicoGL from 'picogl';

import {invariant, isFloatTexture, isFloatBuffer} from '../utils';

import assembleVert from './assemble.vert';
import storeFrag from './store.frag';

export default function (app) {
    invariant(app.floatRenderTargetsEnabled);

    const mark = Symbol();

    const prog = app.createProgram(assembleVert, storeFrag);

    return (positions, masses, bounds, result) => {
        let call = positions[mark];

        if (!call) {
            invariant(isFloatBuffer(positions, 2));
            invariant(isFloatBuffer(masses, 1));
            invariant(positions.numItems === masses.numItems);
            invariant(positions[mark] === masses[mark]);

            const vao = app.createVertexArray()
                .vertexAttributeBuffer(0, positions)
                .vertexAttributeBuffer(1, masses);

            call = positions[mark] = masses[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
        }

        invariant(positions[mark] === masses[mark]);

        let fb = result[mark];

        if (!fb) {
            invariant(isFloatTexture(result, 4));

            fb = result[mark] = app.createFramebuffer()
                .colorTarget(0, result);
        }

        invariant(isFloatTexture(bounds, 4));
        invariant(bounds.width === 1 && bounds.height === 1);

        // TODO: use an uniform buffer.
        call
            .uniform('invShape', [1/result.width, 1/result.height])
            // TODO: can we avoid borders?
            .uniform('border', [1 - 1/result.width, 1 - 1/result.height])
            .texture('bounds', bounds);

        app
            .drawFramebuffer(fb)
            .viewport(0, 0, result.width, result.height)
            .clearMask(PicoGL.COLOR_BUFFER_BIT)
            .clearColor(0, 0, 0, 0)
            .clear()
            .blendFuncSeparate(PicoGL.ONE, PicoGL.ONE, PicoGL.ONE, PicoGL.ZERO)
            .blend();

        call.draw();

        app.noBlend();
    };
}

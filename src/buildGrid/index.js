import PicoGL from 'picogl';

import {invariant} from '../utils';

import assembleVert from './assemble.vert';
import storeFrag from './store.frag';

export default function (app) {
    invariant(app.floatRenderTargetsEnabled);

    const mark = Symbol();

    const prog = app.createProgram(assembleVert, storeFrag);

    return (positions, masses, bounds, result) => {
        let call = positions[mark];

        if (!call) {
            invariant(positions.type === PicoGL.FLOAT);
            invariant(positions.itemSize === 2);
            invariant(masses.type === PicoGL.FLOAT);
            invariant(masses.itemSize === 1);
            invariant(positions.numItems === masses.numItems);
            invariant(positions[mark] === masses[mark]);

            const vao = app.createVertexArray()
                .vertexAttributeBuffer(0, positions)
                .vertexAttributeBuffer(1, masses);

            call = positions[mark] = masses[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
        }

        let fb = result[mark];

        if (!fb) {
            invariant(result.type === PicoGL.FLOAT);
            invariant(result.format === PicoGL.RGBA);

            fb = result[mark] = app.createFramebuffer().colorTarget(0, result);
        }

        invariant(bounds.type === PicoGL.FLOAT);
        invariant(bounds.width === 1 && bounds.height === 1);

        // TODO: use an uniform buffer.
        call
            .uniform('border', [1 - 1/result.width, 1 - 1/result.height])
            .texture('bounds', bounds);

        app
            .rasterize()
            .drawFramebuffer(fb)
            .viewport(0, 0, result.width, result.height)
            .clearMask(PicoGL.COLOR_BUFFER_BIT)
            .clearColor(0, 0, 0, 0)
            .clear()
            .blend()
            .blendFunc(PicoGL.ONE, PicoGL.ONE);

        call.draw();

        app.noBlend();
    };
}

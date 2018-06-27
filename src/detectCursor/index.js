import PicoGL from 'picogl';

import {invariant, isFloatTexture, isFloatBuffer} from '../utils';

import locateVert from './locate.vert';
import storeFrag from './store.frag';

export default function (app) {
    const mark = Symbol();

    const prog = app.createProgram(locateVert, storeFrag);

    return (positions, cursor, result) => {
        let call = positions[mark];

        if (!call) {
            invariant(isFloatBuffer(positions, 2));

            const vao = app.createVertexArray()
                .vertexAttributeBuffer(0, positions);

            call = positions[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
        }

        let fb = result[mark];

        if (!fb) {
            invariant(isFloatTexture(result, 4));

            fb = result[mark] = app.createFramebuffer()
                .colorTarget(0, result);
        }

        app
            .drawFramebuffer(fb)
            .viewport(0, 0, 1, 1)
            .clearMask(PicoGL.COLOR_BUFFER_BIT)
            .clearColor(-1, -1, -1, -1)
            .clear();

        call
            .uniform('cursor', cursor)
            .draw();
    };
}

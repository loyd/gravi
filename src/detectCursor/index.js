import PicoGL from 'picogl';

import {
    invariant,
    createFloatTexture, isFloatTexture, readFromTexture,
    isFloatBuffer,
} from '../utils';

import locateVert from './locate.vert';
import storeFrag from './store.frag';

export default function (app) {
    const mark = Symbol();

    const prog = app.createProgram(locateVert, storeFrag);

    const result = createFloatTexture(app, 1, 1, 4)
        .data(new Float32Array(4));

    const fb = app.createFramebuffer()
            .colorTarget(0, result);

    return (positions, cursor) => {
        let call = positions[mark];

        if (!call) {
            invariant(isFloatBuffer(positions, 2));

            const vao = app.createVertexArray()
                .vertexAttributeBuffer(0, positions);

            call = positions[mark] = app.createDrawCall(prog, vao, PicoGL.POINTS);
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

        return readFromTexture(app, result)[0] | 0;
    };
}

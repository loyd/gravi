import PicoGL from 'picogl';

import {invariant, isFloatTexture, isFloatBuffer} from '../utils';

import locateVert from './locate.vert';
import colorFrag from './color.frag';

export default function (app) {
    const mark = Symbol();

    const prog = app.createProgram(locateVert, colorFrag);

    return (corners, grid, positions) => {
        let call = corners[mark];

        if (!call) {
            invariant(isFloatBuffer(corners, 2));

            const vao = app.createVertexArray()
                .vertexAttributeBuffer(0, corners);

            call = corners[mark] = app.createDrawCall(prog, vao, PicoGL.TRIANGLES);
        }

        invariant(isFloatTexture(grid, 1));
        invariant(isFloatTexture(positions, 2));

        app
            .defaultDrawFramebuffer()
            .viewport(0, 0, app.width, app.height);

        call.numElements = 6 * grid.width * grid.height;

        call
            .uniform('invShape', [1/app.width, 1/app.height])
            .texture('grid', grid)
            .texture('positions', positions)
            .draw();
    };
}

import PicoGL from 'picogl';

import {invariant, isFloatTexture, isUnsignedBuffer} from '../utils';

import locateVert from './locate.vert';
import colorFrag from './color.frag';

export default function (app) {
    const mark = Symbol();

    const prog = app.createProgram(locateVert, colorFrag);

    return (endpoints, positions) => {
        let call = endpoints[mark];

        if (!call) {
            invariant(isUnsignedBuffer(endpoints, 1));

            const vao = app.createVertexArray()
                .vertexIntegerAttributeBuffer(0, endpoints);

            call = endpoints[mark] = app.createDrawCall(prog, vao, PicoGL.LINES);
        }

        invariant(isFloatTexture(positions, 2));

        app
            .defaultDrawFramebuffer()
            .viewport(0, 0, app.width, app.height);

        call
            .uniform('invShape', [1/app.width, 1/app.height])
            .texture('positions', positions)
            .draw();
    };
}

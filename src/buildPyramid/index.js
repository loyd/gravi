import PicoGL from 'picogl';

import {invariant} from '../utils';

import quadVert from './quad.vert';
import reduceFrag from './reduce.frag';

const QUAD = new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]);

export default function (app) {
    invariant(app.floatRenderTargetsEnabled);

    const mark = Symbol();

    const prog = app.createProgram(quadVert, reduceFrag);

    const buf = app.createVertexBuffer(PicoGL.FLOAT, 2, QUAD);
    const vao = app.createVertexArray().vertexAttributeBuffer(0, buf);
    const call = app.createDrawCall(prog, vao, PicoGL.TRIANGLE_STRIP);

    return (grid, result) => {
        for (let i = 0; i < result.length; ++i) {
            const source = i === 0 ? grid : result[i-1];
            const target = result[i];

            invariant(2 * target.width === source.width);
            invariant(2 * target.height === source.height);

            let fb = target[mark];

            if (!fb) {
                invariant(target.type === PicoGL.FLOAT);
                invariant(target.format === PicoGL.RGBA);

                fb = target[mark] = app.createFramebuffer().colorTarget(0, target);
            }

            app
                .drawFramebuffer(fb)
                .viewport(0, 0, target.width, target.height);

            call
                .texture('grid', source)
                .draw();
        }
    };
}

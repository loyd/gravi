import PicoGL from 'picogl';

import {invariant, log4, isFloatTexture} from '../utils';

import introVert from './intro.vert';
import reduceVert from './reduce.vert';
import storeFrag from './store.frag';

function createVao(app, data, pattern = data.itemSize) {
    invariant(data.type === PicoGL.FLOAT);
    invariant(data.itemSize >= 2);

    const {gl} = app;

    const vao = app.createVertexArray();

    gl.bindVertexArray(vao.vertexArray);
    gl.bindBuffer(data.binding, data.buffer);

    const stepSize = data.itemSize * PicoGL.TYPE_SIZE[PicoGL.FLOAT];

    for (let i = 0; i < 4; ++i) {
        gl.vertexAttribPointer(
            i,
            pattern,
            PicoGL.FLOAT,
            false,
            4 * stepSize,
            i * stepSize
        );

        gl.enableVertexAttribArray(i);
    }

    vao.instanced = false;

    gl.bindVertexArray(null);
    gl.bindBuffer(data.binding, null);

    return vao;
}

class Kit {
    static readable(app, program, buffer, pattern) {
        const vao = createVao(app, buffer, pattern);
        const call = app.createDrawCall(program, vao, PicoGL.POINTS);

        return new Kit(buffer, vao, call, null);
    }

    static duplex(app, program, size, pattern) {
        const buf = app.createVertexBuffer(PicoGL.FLOAT, 4, 4 * Math.max(size, 1));
        const vao = createVao(app, buf, pattern);
        const call = app.createDrawCall(program, vao, PicoGL.POINTS);
        const tf = app.createTransformFeedback().feedbackBuffer(0, buf);

        return new Kit(buf, vao, call, tf);
    }

    constructor(buf, vao, call, tf) {
        this.buf = buf;
        this.vao = vao;
        this.call = call;
        this.tf = tf;
    }

    resize(size) {
        // TODO: implement resizing.
    }

    draw(size, tf) {
        this.call.numElements = size;

        if (tf) {
            this.call.transformFeedback(tf);
        }

        this.call.draw();
    }
}

export default function (app) {
    invariant(app.floatRenderTargetsEnabled);

    const mark = Symbol();

    const introProg = app.createProgram(introVert, storeFrag, ['result']);
    const reduceProg = app.createProgram(reduceVert, storeFrag, ['result']);

    let N = -1;
    let tempA = null;
    let tempB = null;

    // 1-4: data --(intro)-> result
    // 5-16: data --(intro)-> tempA --(reduce)-> result
    // 17-64: data --(intro)-> tempA --(reduce)-> tempB --(reduce)-> result
    // ...: data --(intro)-> tempA --(reduce)-> tempB --(reduce)-> tempA ...

    return (data, result) => {
        let activeKit = data[mark];

        if (!activeKit) {
            activeKit = data[mark] = Kit.readable(app, introProg, data, 2);
        }

        let resultFb = result[mark];

        if (!resultFb) {
            invariant(isFloatTexture(result, 4));

            resultFb = result[mark] = app.createFramebuffer().colorTarget(0, result);
        }

        const stepCount = Math.max(Math.ceil(log4(data.numItems)), 1);

        if (data.numItems !== N) {
            N = data.numItems;

            tempA = tempA ? tempA.resize(N) : Kit.duplex(app, reduceProg, 4 ** (stepCount - 1));
            tempB = tempB ? tempB.resize(N) : Kit.duplex(app, reduceProg, 4 ** (stepCount - 2));
        }

        activeKit.call.uniform('N', N);

        app.noRasterize();

        for (let size = 4 ** (stepCount - 1); size > 1; size /= 4) {
            const nextKit = activeKit === tempA ? tempB : tempA;

            activeKit.draw(size, nextKit.tf);

            activeKit = nextKit;
        }

        app
            .rasterize()
            .drawFramebuffer(resultFb)
            .viewport(0, 0, 1, 1);

        activeKit.draw(1);

        return stepCount;
    };
}

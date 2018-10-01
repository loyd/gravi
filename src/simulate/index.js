import PicoGL from 'picogl';

import {invariant, isFloatTexture, isUnsignedBuffer, isFloatBuffer} from '../utils';

import simulateVert from './simulate.vert';
import storeFrag from './store.frag';

const {FLOAT} = PicoGL;
const CONSTANTS_LAYOUT = [FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT, FLOAT];

function saveConstants(consts, ub) {
    ub.set(0, consts.nodeCount);
    ub.set(1, consts.deltaT);
    ub.set(2, consts.springCoef);
    ub.set(3, consts.springLength);
    ub.set(4, consts.repulseCoef);
    ub.set(5, consts.theta * consts.theta);
    ub.set(6, consts.dragCoef);
    ub.set(7, consts.gravityCoef);
    ub.update();
}

export default function (app) {
    invariant(app.floatRenderTargetsEnabled);

    const mark = Symbol();

    const constantsUB = app.createUniformBuffer(CONSTANTS_LAYOUT);

    const prog = app.createProgram(simulateVert, storeFrag, ['resultPosition', 'resultVelocity']);

    let prevConstants = null;

    return (
        positions, velocities, masses, edgesLocs,
        pyramid, grid, allPositions, edges,
        constants,
        resultPositions, resultVelocities,
        resultAllPositions,
    ) => {
        invariant(isFloatTexture(pyramid, 4));
        invariant(isFloatTexture(grid, 4));
        invariant(isFloatTexture(allPositions, 2));
        invariant(isFloatTexture(edges, 3));
        invariant(allPositions.width === resultAllPositions.width);

        if (constants !== prevConstants) {
            saveConstants(constants, constantsUB);

            prevConstants = constants;
        }

        let call = positions[mark];

        if (!call) {
            invariant(isFloatBuffer(positions, 2));
            invariant(isFloatBuffer(velocities, 2));
            invariant(isFloatBuffer(resultPositions, 2));
            invariant(isFloatBuffer(resultVelocities, 2));
            invariant(isFloatBuffer(masses, 1));
            invariant(isUnsignedBuffer(edgesLocs, 2));
            invariant(positions.numItems === velocities.numItems);
            invariant(positions.numItems === resultPositions.numItems);
            invariant(positions.numItems === resultVelocities.numItems);

            const vao = app.createVertexArray()
                .vertexAttributeBuffer(0, positions)
                .vertexAttributeBuffer(1, velocities)
                .vertexAttributeBuffer(2, masses)
                .vertexAttributeBuffer(3, edgesLocs);

            const tf = app.createTransformFeedback()
                .feedbackBuffer(0, resultPositions)
                .feedbackBuffer(1, resultVelocities);

            call = app.createDrawCall(prog, vao, PicoGL.POINTS)
                .transformFeedback(tf);

            positions[mark] = velocities[mark] = masses[mark] = edgesLocs[mark] = call;
        }

        invariant(
            positions[mark] === velocities[mark] &&
            positions[mark] === masses[mark] &&
            positions[mark] === edgesLocs[mark]
        );

        let fb = resultAllPositions[mark];

        if (!fb) {
            invariant(isFloatTexture(resultAllPositions, 2));

            fb = resultAllPositions[mark] = app.createFramebuffer().colorTarget(0, resultAllPositions);
        }

        app
            .drawFramebuffer(fb)
            .viewport(0, 0, resultAllPositions.width, resultAllPositions.height);

        call
            .uniformBlock('Constants', constantsUB)
            .texture('pyramid', pyramid)
            .texture('grid', grid)
            .texture('positions', allPositions)
            .texture('edges', edges)
            .draw();
    };
}

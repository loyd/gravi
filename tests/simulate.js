import PicoGL from 'picogl';

import simulate from '../src/simulate';
import {createApp, createFloatTexture, readFromTexture, readFromBuffer, round} from './helpers';

describe('simulate step', () => {
    describe('gravity force', () => {
        it('should move nodes towards the center', () => {
            const {nodes} = test({
                nodes: [
                    {x: 10, y: 10},
                    {x: -10, y: 10},
                    {x: 10, y: -10},
                    {x: -10, y: -10},
                ],
                constants: {
                    gravityCoef: 1.,
                },
            });

            for (const node of nodes) {
                expect(Math.abs(node.x)).toBe(Math.abs(node.y));
                expect(Math.abs(node.x)).toBeLessThan(10);
                expect(Math.abs(node.x)).toBeGreaterThan(9);
            }
        });
    });
});

function test(config) {
    const app = createApp();

    const nodeCount = config.nodes.length;
    const positions = [];
    const velocities = [];
    const masses = [];
    const edgesLocs = [];

    for (const node of config.nodes) {
        positions.push(node.x, node.y);
        velocities.push(node.vx || 0, node.vy || 0);
        masses.push(node.mass || 1);
        edgesLocs.push(0, 0);
    }

    const positionsBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(positions));
    const velocitiesBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(velocities));
    const massesBuf = app.createVertexBuffer(PicoGL.FLOAT, 1, new Float32Array(masses));
    const edgesLocsBuf = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 2, new Float32Array(edgesLocs));

    const pyramidTex = createFloatTexture(app, 32, 32, 4);  // TODO
    const gridTex = createFloatTexture(app, 4, 4, 4);       // TODO
    const allPositionsTex = createFloatTextureAndFill(app, positions, 2);
    const edgesTex = createFloatTexture(app, 10, 10, 3);    // TODO

    const constants = Object.assign({
        nodeCount,
        deltaT: 0.02,
        springCoef: 0,
        springLength: 30,
        repulseCoef: 0,
        theta: 0.8,
        dragCoef: 0,
        gravityCoef: 0,
    }, config.constants);

    const resultPositionsBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, positions.length);
    const resultVelocitiesBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, velocities.length);
    const resultAllPositionsTex = createFloatTexture(app, allPositionsTex.width, allPositionsTex.height, 2);

    simulate(app)(
        positionsBuf, velocitiesBuf, massesBuf, edgesLocsBuf,
        pyramidTex, gridTex, allPositionsTex, edgesTex,
        constants,
        resultPositionsBuf, resultVelocitiesBuf,
        resultAllPositionsTex,
    );

    return {
        nodes: combineParts(app, resultPositionsBuf, resultVelocitiesBuf),
    };
}

function combineParts(app, positionsBuf, velocitiesBuf) {
    const positions = readFromBuffer(app, positionsBuf);
    const velocities = readFromBuffer(app, velocitiesBuf);

    expect(positions.length).toBe(velocities.length);

    const nodes = [];

    for (let i = 0; i < positions.length; i += 2) {
        nodes.push({
            x: positions[i],
            y: positions[i+1],
            vx: velocities[i],
            vy: velocities[i+1],
        });
    }

    return nodes;
}

function createFloatTextureAndFill(app, list, itemSize) {
    const shape = Math.ceil(Math.sqrt(list.length));

    const tmpBuf = new Float32Array(itemSize * shape * shape);
    tmpBuf.set(list);

    return createFloatTexture(app, shape, shape, 2).data(tmpBuf);
}

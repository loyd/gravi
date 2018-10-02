import PicoGL from 'picogl';

import simulate from '../src/simulate';
import {createApp, createFloatTexture, readFromTexture, readFromBuffer, round} from './helpers';

describe('simulate step', () => {
    describe('output consistency', () => {
        for (const n of [1, 2, 10, 24, 25, 26, 511, 512, 513]) {
            it(`should be applied (${n} nodes)`, () => {
                const nodes = [];

                for (let i = 0; i < n; ++i) {
                    nodes.push({x: i, y: i});
                }

                test({nodes});
            });
        }
    });

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
                expect(Math.sign(node.vx)).toBe(-Math.sign(node.x));
                expect(Math.sign(node.vy)).toBe(-Math.sign(node.y));
            }
        });

        it('should not move from the center', () => {
            const {nodes} = test({
                nodes: [
                    {x: 0, y: 0},
                    {x: 0, y: 0},
                ],
                constants: {
                    gravityCoef: 1.,
                },
            });

            expect(nodes.map(node => [node.x, node.y])).toEqual([[0, 0], [0, 0]]);
            expect(nodes.map(node => [node.vx, node.vy])).toEqual([[0, 0], [0, 0]]);
        });
    });

    describe('drag force', () => {
        it('', () => {
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

    expectConsistency(app, resultPositionsBuf, resultAllPositionsTex);

    return {
        nodes: combineParts(app, resultPositionsBuf, resultVelocitiesBuf),
    };
}

function expectConsistency(app, buf, tex) {
    const bufVec = readFromBuffer(app, buf);
    const texVec = readFromTexture(app, tex);

    const len = bufVec.length;

    expect(bufVec).toEqual(texVec.slice(0, len));
    expect(texVec.slice(len)).toEqual(Array.from(Array(texVec.length - len), _ => 0));
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
    const shape = Math.ceil(Math.sqrt(list.length / itemSize));

    const tmpBuf = new Float32Array(itemSize * shape * shape);
    tmpBuf.set(list);

    return createFloatTexture(app, shape, shape, itemSize).data(tmpBuf);
}

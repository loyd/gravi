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

    describe('no forces', () => {
        it('should not change velocities', () => {
            const nodes = test({
                nodes: [
                    {x: 10, y: 10},
                    {x: -10, y: -10},
                ],
            });

            expect(nodes.map(node => [node.x, node.y])).toEqual([[10, 10], [-10, -10]]);
            expect(nodes.map(node => [node.vx, node.vy])).toEqual([[0, 0], [0, 0]]);
        });
    });

    describe('gravity force', () => {
        it('should move nodes towards the center', () => {
            const nodes = test({
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
                expect(Math.abs(node.vx)).toBe(Math.abs(node.vy));
                expect(round(Math.abs(node.x))).toBe(9.993);
                expect(round(Math.abs(node.vx))).toBe(0.071);
                expect(Math.sign(node.vx)).toBe(-Math.sign(node.x));
                expect(Math.sign(node.vy)).toBe(-Math.sign(node.y));
            }
        });

        it('should not move from the center', () => {
            const nodes = test({
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
        it('should slow mobile nodes', () => {
            const nodes = test({
                nodes: [
                    {vx: .7, vy: .7},
                    {vx: -.7, vy: .7},
                    {vx: .7, vy: -.7},
                    {vx: -.7, vy: -.7},
                ],
                constants: {
                    dragCoef: 1.,
                },
            });

            for (const node of nodes) {
                expect(Math.abs(node.x)).toBe(Math.abs(node.y));
                expect(Math.abs(node.vx)).toBe(Math.abs(node.vy));
                expect(round(Math.abs(node.vx))).toBe(.63);
                expect(round(Math.abs(node.x))).toBe(.063);
            }
        });

        it('should not move fixed nodes', () => {
            const nodes = test({
                nodes: [
                    {x: 10, y: 10},
                    {x: -10, y: -10},
                ],
                constants: {
                    dragCoef: 1.,
                },
            });

            expect(nodes.map(node => [node.x, node.y])).toEqual([[10, 10], [-10, -10]]);
            expect(nodes.map(node => [node.vx, node.vy])).toEqual([[0, 0], [0, 0]]);
        });
    });

    describe('spring force', () => {
        it('should move source node in directed case', () => {
            const nodes = test({
                nodes: [
                    {x: 10, y: 10},
                    {x: 10, y: 10},
                    {x: -10, y: -10},
                ],
                edges: [
                    {from: 0, to: 2},
                    {from: 1, to: 2, weight: 3},
                ],
                constants: {
                    springCoef: 1.,
                },
            });

            expect(round(nodes[0].x)).toBe(10.012);
            expect(round(nodes[0].vx)).toBe(0.121);
            expect(nodes[0].x).toBe(nodes[0].y);
            expect(nodes[0].vx).toBe(nodes[0].vy);
            expect(round(nodes[1].vx)).toBe(0.364);
            expect(nodes[2]).toEqual({x: -10, y: -10, vx: 0, vy: 0});
        });

        it('should move both nodes in bidirected case', () => {
            const nodes = test({
                nodes: [
                    {x: 10, y: 10},
                    {x: -10, y: -10},
                ],
                edges: [
                    {from: 0, to: 1},
                    {from: 1, to: 0},
                ],
                constants: {
                    springCoef: 1.,
                },
            });

            expect(round(nodes[0].x)).toBe(10.012);
            expect(round(nodes[0].vx)).toBe(0.121);
            expect(nodes[0].x).toBe(nodes[0].y);
            expect(nodes[0].vx).toBe(nodes[0].vy);
            expect(nodes[0].x).toBe(-nodes[1].x);
            expect(nodes[0].y).toBe(-nodes[1].y);
            expect(nodes[0].vx).toBe(-nodes[1].vx);
            expect(nodes[0].vy).toBe(-nodes[1].vy);
        });

        it('should shift glued nodes', () => {
            const nodes = test({
                nodes: [
                    {x: 10, y: 10},
                    {x: 10, y: 10},
                ],
                edges: [
                    {from: 0, to: 1},
                ],
                constants: {
                    springCoef: 1.,
                },
            });

            expect(nodes[1].x).toBe(10);
            expect(nodes[1].y).toBe(10);
            expect(nodes[0].x).toBeLessThan(10);
            expect(nodes[0].y).toBe(10);
        });
    });

    fdescribe('repulse force', () => {
        it('should shift centered nodes', () => {
            const nodes = test({
                nodes: [
                    {x: 15, y: 15},
                    {x: 15, y: 15},
                ],
                grid: [
                    0,0,0,0, 0,0,0,0, 0,0,0,0, 30,30,2,100,
                    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
                    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
                    0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
                ],
                pyramid: [
                    0,0,0,0, 30,30,2,100,
                    0,0,0,0, 0,0,0,0,
                ],
                constants: {
                    repulseCoef: 1.,
                },
            });

            expect(nodes[0].x).toBeGreaterThan(15);
            expect(nodes[0].y).toBe(15);
            expect(nodes[1].x).toBeLessThan(15);
            expect(nodes[1].y).toBe(15);
        });

		it('should nod move alone node', () => {
			const nodes = test({
				nodes: [
					{x: 17, y: 17},
				],
				grid: [
					0,0,0,0, 0,0,0,0, 0,0,0,0, 17,17,1,100,
					0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
					0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
					0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,0,
				],
				pyramid: [
					0,0,0,0, 17,17,1,100,
					0,0,0,0, 0,0,0,0,
				],
				constants: {
					repulseCoef: 1.,
				},
			});

			expect(nodes[0].x).toBe(17);
			expect(nodes[0].y).toBe(17);
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
        positions.push(node.x || 0, node.y || 0);
        velocities.push(node.vx || 0, node.vy || 0);
        masses.push(node.mass || 1);
        edgesLocs.push(0, 0);
    }

    const edges = config.edges ? packEdges(config.edges, edgesLocs) : [];

    const positionsBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(positions));
    const velocitiesBuf = app.createVertexBuffer(PicoGL.FLOAT, 2, new Float32Array(velocities));
    const massesBuf = app.createVertexBuffer(PicoGL.FLOAT, 1, new Float32Array(masses));
    const edgesLocsBuf = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 2, new Uint32Array(edgesLocs));

    const pyramidTex = createFloatTextureAndFill(app, config.pyramid || zeroed(2 * 2 * 4), 4);
    const gridTex = createFloatTextureAndFill(app, config.grid || zeroed(4 * 4 * 4), 4);
    const allPositionsTex = createFloatTextureAndFill(app, positions, 2);
    const edgesTex = createFloatTextureAndFill(app, edges, 3);

    const constants = Object.assign({
        nodeCount,
        deltaT: 0.1,
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

    return combineParts(app, resultPositionsBuf, resultVelocitiesBuf);
}

const zeroed = n => Array.from(Array(n), () => 0);

function packEdges(edges, edgesLocs) {
    edges.sort((a, b) => a.from - b.from);

    const result = [];

    let last = 0;
    let prevFrom = -1;

    for (const {from, to, weight = 1} of edges) {
        if (from !== prevFrom) {
            edgesLocs[2 * from] = last;

            if (prevFrom >= 0) {
                edgesLocs[2 * prevFrom + 1] = last;
            }

            prevFrom = from;
        }

        result.push(from, to, weight);
        ++last;
    }

    edgesLocs[2 * prevFrom + 1] = last;

    return result;
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

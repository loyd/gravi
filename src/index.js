import PicoGL from 'picogl';

import findBounds from './findBounds';
import buildGrid from './buildGrid';
import buildPyramid from './buildPyramid';
import simulate from './simulate';
import drawNodes from './drawNodes';
import drawEdges from './drawEdges';

import {createFloatTexture} from './utils';

const GRID_SIZE = 512;

export default class Graph {
    constructor(canvas) {
        const app = this._app = PicoGL.createApp(canvas);

        app.floatRenderTargets();

        this._constants = {
            nodeCount: 0,
            deltaT: 0.02,
            springCoef: 0.0002,
            springLength: 30,
            repulseCoef: 1.2,
            theta: 0.8,
            dragCoef: 0.02,
            gravityCoef: 1,
        };

        this._nodes = [];
        this._edgeCount = 0;
        this._nodeNameToId = new Map;

        this._running = false;
        this._shouldUpdate = false;

        this._findBounds = findBounds(app);
        this._buildGrid = buildGrid(app);
        this._buildPyramid = buildPyramid(app);
        this._simulate = simulate(app);
        this._drawNodes = drawNodes(app);
        this._drawEdges = drawEdges(app);

        this._buffers = {
            positionsA: null,
            positionsB: null,
            velocitiesA: null,
            velocitiesB: null,
            masses: null,
            edgesLocs: null,
        };

        this._textures = {
            bounds: null,
            grid: null,
            pyramid: null,
            allPositionsA: null,
            allPositionsB: null,
            edges: null,
        };
    }

    configure(config) {
        this._constants = Object.assign({}, this._constants, config);

        return this;
    }

    addNodes(nodes) {
        let nextId = this._nodes.length;

        for (const {name, position, weight} of nodes) {
            this._nodes.push({
                name: name != null ? name : null,
                position: position || [0, 0],
                weight: weight != null ? weight : 1,
                edges: [],
            });

            if (name != null) {
                this._nodeNameToId.set(name, nextId++);
            }
        }

        this._run();

        return this;
    }

    addEdges(edges) {
        for (const {source, target, weight} of edges) {
            const sourceId = typeof source === 'number' ? source : this._nodeNameToId.get(source);
            const targetId = typeof target === 'number' ? target : this._nodeNameToId.get(target);

            this._nodes[sourceId].edges.push({
                target: targetId,
                weight: weight != null ? weight : 1,
            });

            ++this._edgeCount;
        }

        this._run();

        return this;
    }

    _run() {
        this._shouldUpdate = true;

        if (!this._running) {
            this._progress();
            this._running = true;
        }
    }

    _progress() {
        window.requestAnimationFrame(_ => {
            if (this._shouldUpdate) {
                this._update();
                this._shouldUpdate = false;
            }

            this._turn();
            this._progress();
        });
    }

    _update() {
        const app = this._app;
        const buf = this._buffers;
        const tex = this._textures;

        const nodeCount = this._nodes.length;
        const edgeCount = this._edgeCount;

        const positions = new Float32Array(2 * nodeCount);
        const masses = new Float32Array(nodeCount);
        const edgesLocs = new Uint32Array(2 * nodeCount);
        const edges = new Float32Array(3 * edgeCount);

        const l = 0;

        for (let i = 0; i < nodeCount; ++i) {
            const node = this._nodes[i];

            positions[2*i] = node.positions[0];
            positions[2*i+1] = node.positions[1];
            masses[i] = node.weight;
            edgesLocs[2*i] = l;

            for (const edge of node.edges) {
                edges[l++] = i;
                edges[l++] = edge.target;
                edges[l++] = edge.weight;
            }

            edgesLocs[2*i+1] = l;
        }

        // Update the constants.

        this._constants = Object.assign({}, this._constants, {nodeCount});

        // Create the buffers.

        buf.positionsA = app.createVertexBuffer(PicoGL.FLOAT, 2, positions);
        buf.positionsB = app.createVertexBuffer(PicoGL.FLOAT, 2, positions.length);
        buf.velocitiesA = app.createVertexBuffer(PicoGL.FLOAT, 2, positions.length);
        buf.velocitiesB = app.createVertexBuffer(PicoGL.FLOAT, 2, positions.length);
        buf.masses = app.createVertexBuffer(PicoGL.FLOAT, 1, masses);
        buf.edgesLocs = app.createVertexBuffer(PicoGL.UNSIGNED, 2, edgesLocs);

        // Create the textures.

        tex.bounds = createFloatTexture(app, 1, 1, 4);
        tex.grid = createFloatTexture(app, GRID_SIZE, GRID_SIZE, 4);
        tex.pyramid = createFloatTexture(app, GRID_SIZE - 2, GRID_SIZE / 2, 4);

        const posTexSize = Math.ceil(Math.sqrt(nodeCount));
        tex.allPositionsA = createFloatTexture(app, posTexSize, posTexSize, 2);
        tex.allPositionsB = createFloatTexture(app, posTexSize, posTexSize, 2);

        const edgTexSize = Math.ceil(Math.sqrt(edgeCount));
        tex.edges = createFloatTexture(app, edgTexSize, edgTexSize, 2);
    }

    _turn() {
        const buf = this._buffers;
        const tex = this._textures;

        this._findBounds(buf.positionsA, tex.bounds);

        this._buildGrid(buf.positionsA, buf.masses, tex.bounds, tex.grid);

        this._buildPyramid(tex.grid, tex.pyramid);

        this._simulate(
            buf.positionsA, buf.velocitiesA, buf.masses, buf.edgesLocs,
            tex.pyramid, tex.grid, tex.allPositionsA, tex.edges,
            this._constants,
            buf.positionsB, buf.velocitiesB,
            tex.allPositionsB,
        );

        this._drawEdges(tex.edges, tex.allPositionsB);

        this._drawNodes(tex.allPositionsB);

        [buf.positionsA, buf.positionsB] = [buf.positionsB, buf.positionsA];
        [buf.velocitiesA, buf.velocitiesB] = [buf.velocitiesB, buf.velocitiesA];
        [tex.allPositionsA, tex.allPositionsB] = [tex.allPositionsB, tex.allPositionsA];
    }
}

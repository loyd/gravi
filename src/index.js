import PicoGL from 'picogl';

import findBounds from './findBounds';
import buildGrid from './buildGrid';
import buildPyramid from './buildPyramid';
import simulate from './simulate';
import drawNodes from './drawNodes';
import drawEdges from './drawEdges';
import detectCursor from './detectCursor';

import {createFloatTexture} from './utils';

const GRID_SIZE = 512;

export class Graph {
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

        this._steps = {
            findBounds: findBounds(app),
            buildGrid: buildGrid(app),
            buildPyramid: buildPyramid(app),
            simulate: simulate(app),
            drawNodes: drawNodes(app),
            drawEdges: drawEdges(app),
            detectCursor: detectCursor(app),
        };

        this._buffers = {
            positionsA: null,
            positionsB: null,
            velocitiesA: null,
            velocitiesB: null,
            masses: null,
            edgesLocs: null,
            edgepoints: null,
        };

        this._textures = {
            bounds: null,
            grid: null,
            pyramid: null,
            positionsA: null,
            positionsB: null,
            edges: null,
        };

        canvas.addEventListener('click', ev => this._onClick(ev), false);
    }

    configure(config) {
        this._constants = Object.assign({}, this._constants, config);

        return this;
    }

    addNodes(nodes) {
        let nextId = this._nodes.length;

        for (const {name, x, y, weight} of nodes) {
            this._nodes.push({
                name: name != null ? name : null,
                x: x != null ? x : 0,
                y: y != null ? y : 0,
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

    _onClick(event) {
        const {canvas} = this._app.gl;
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = rect.height - (event.clientY - rect.top);

        const buf = this._buffers;
        const steps = this._steps;

        const idx = steps.detectCursor(buf.positionsA, [x, y]);

        if (idx === -1) {
            return;
        }

        console.log('CLICK', idx, this._nodes[idx].name);
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
        const endpoints = new Uint32Array(2 * edgeCount);
        const corners = new Float32Array(12 * nodeCount);

        const cornerTmpl = [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, -1];

        let endpointsLen = 0;
        let edgesLen = 0;
        let cornersLen = 0;

        for (let i = 0; i < nodeCount; ++i) {
            const node = this._nodes[i];

            positions[2*i] = node.x;
            positions[2*i+1] = node.y;
            masses[i] = node.weight;
            edgesLocs[2*i] = edgesLen;

            for (const edge of node.edges) {
                edges[edgesLen++] = i;
                edges[edgesLen++] = edge.target;
                edges[edgesLen++] = edge.weight;

                endpoints[endpointsLen++] = i;
                endpoints[endpointsLen++] = edge.target;
            }

            edgesLocs[2*i+1] = edgesLen;

            corners.set(cornerTmpl, cornersLen);
            cornersLen += cornerTmpl.length;
        }

        // Update the constants.

        this._constants = Object.assign({}, this._constants, {nodeCount});

        // Create the buffers.

        buf.positionsA = app.createVertexBuffer(PicoGL.FLOAT, 2, positions);
        buf.positionsB = app.createVertexBuffer(PicoGL.FLOAT, 2, positions.length);
        buf.velocitiesA = app.createVertexBuffer(PicoGL.FLOAT, 2, positions.length);
        buf.velocitiesB = app.createVertexBuffer(PicoGL.FLOAT, 2, positions.length);
        buf.masses = app.createVertexBuffer(PicoGL.FLOAT, 1, masses);
        buf.edgesLocs = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 2, edgesLocs);
        buf.endpoints = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 1, endpoints);
        buf.corners = app.createVertexBuffer(PicoGL.FLOAT, 2, corners);

        // Create the textures.

        tex.bounds = createFloatTexture(app, 1, 1, 4);
        tex.grid = createFloatTexture(app, GRID_SIZE, GRID_SIZE, 4);
        tex.pyramid = createFloatTexture(app, GRID_SIZE - 2, GRID_SIZE / 2, 4);
        const posTexSize = Math.ceil(Math.sqrt(nodeCount));

        tex.positionsA = createFloatTexture(app, posTexSize, posTexSize, 2);
        tex.positionsB = createFloatTexture(app, posTexSize, posTexSize, 2);

        const edgTexSize = Math.ceil(Math.sqrt(edgeCount));
        tex.edges = createFloatTexture(app, edgTexSize, edgTexSize, 2);

        // TEMPORARY.
        const tmpBuf = new Float32Array(2 * posTexSize * posTexSize);
        tmpBuf.set(positions);
        tex.positionsA.data(tmpBuf);
    }

    _turn() {
        const buf = this._buffers;
        const tex = this._textures;
        const steps = this._steps;

        steps.drawEdges(buf.endpoints, tex.positionsA);
        steps.drawNodes(buf.corners, tex.positionsA);

        /*
        steps.findBounds(buf.positionsA, tex.bounds);

        steps.buildGrid(buf.positionsA, buf.masses, tex.bounds, tex.grid);

        steps.buildPyramid(tex.grid, tex.pyramid);

        steps.simulate(
            buf.positionsA, buf.velocitiesA, buf.masses, buf.edgesLocs,
            tex.bounds, tex.pyramid, tex.grid, tex.positionsA, tex.edges,
            this._constants,
            buf.positionsB, buf.velocitiesB,
            tex.positionsB,
        );

        steps.drawEdges(tex.edges, tex.positionsB);

        steps.drawNodes(tex.positionsB);

        [buf.positionsA, buf.positionsB] = [buf.positionsB, buf.positionsA];
        [buf.velocitiesA, buf.velocitiesB] = [buf.velocitiesB, buf.velocitiesA];
        [tex.positionsA, tex.positionsB] = [tex.positionsB, tex.positionsA];
        */
    }
}

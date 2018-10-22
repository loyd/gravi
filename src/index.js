import PicoGL from 'picogl';

import findBounds from './findBounds';
import buildGrid from './buildGrid';
import buildPyramid from './buildPyramid';
import simulate from './simulate';
import detectCursor from './detectCursor';
import selectNodes from './selectNodes';
import drawNodes from './drawNodes';
import drawEdges from './drawEdges';
import drawLabels from './drawLabels';

import {createFloatTexture, nearestPowerOfTwo, nearestPowerOfFour, pick} from './utils';

export class Graph {
    constructor(canvas) {
        const app = this._app = PicoGL.createApp(canvas);

        app.floatRenderTargets();

        /* VivaGraph:
         *  deltaT: 0.02,
         *  springCoef: 0.0002,
         *  springLength: 30,
         *  repulseCoef: 1.2,
         *  theta: 0.8,
         *  dragCoef: 0.02,
         *  gravityCoef: 1,
         */
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
        this._shouldDraw = true;
        this._shouldDrawLabels = false;

        this._viewport = [-app.width/2, -app.height/2, app.width, app.height];

        this._steps = {
            findBounds: findBounds(app),
            buildGrid: buildGrid(app),
            buildPyramid: buildPyramid(app),
            simulate: simulate(app),
            detectCursor: detectCursor(app),
            selectNodes: selectNodes(app),
            drawNodes: drawNodes(app),
            drawEdges: drawEdges(app),
            drawLabels: drawLabels(app),
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
        this._constants = Object.assign({}, this._constants, pick(config,
            ['deltaT', 'springCoef', 'springLength', 'repulseCoef', 'theta', 'dragCoef', 'gravityCoef']
        ));

        if (config.shouldDraw != null) {
            this._shouldDraw = config.shouldDraw;
        }

        if (config.shouldDrawLabels != null) {
            this._shouldDrawLabels = config.shouldDrawLabels;
        }

        this._shouldUpdate = true;

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

        this._shouldUpdate = true;

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

        this._shouldUpdate = true;

        return this;
    }

    run() {
        if (!this._running) {
            this._running = true;
            this._schedule();
        }
    }

    step() {
        if (this._shouldUpdate) {
            this._update();
            this._shouldUpdate = false;
        }

        this._turn();
    }

    halt() {
        this._running = false;
    }

    _schedule() {
        if (!this._running) {
            return;
        }

        window.requestAnimationFrame(_ => {
            this.step();
            this._schedule();
        });
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

    _update() {
        const app = this._app;
        const buf = this._buffers;
        const tex = this._textures;

        const nodeCount = this._nodes.length;
        const edgeCount = this._edgeCount;

        // TODO: select cell number by canvas and font sizes.
        const vpGridShape = [10, 3];

        // TODO: improve the heuristic.
        const gridSize = Math.max(nearestPowerOfTwo(Math.sqrt(3 * nodeCount)), 8);

        const positionsVboLen = 2 * nearestPowerOfFour(nodeCount);
        const posTexSize = Math.ceil(Math.sqrt(nodeCount));
        const edgTexSize = Math.ceil(Math.sqrt(edgeCount));

        const positions = new Float32Array(2 * posTexSize * posTexSize);
        const masses = new Float32Array(nodeCount);
        const edgesLocs = new Uint32Array(2 * nodeCount);
        const edges = new Float32Array(3 * edgTexSize * edgTexSize);
        const endpoints = new Uint32Array(2 * edgeCount);
        const corners = new Float32Array(12 * Math.max(nodeCount, vpGridShape[0] * vpGridShape[1]));

        const cornerTmpl = [-1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, -1];

        let edgesLocsLen = 0;
        let endpointsLen = 0;
        let edgesLen = 0;

        for (let i = 0; i < nodeCount; ++i) {
            const node = this._nodes[i];

            positions[2*i] = node.x;
            positions[2*i+1] = node.y;
            masses[i] = node.weight;
            edgesLocs[2*i] = edgesLocsLen;

            for (const edge of node.edges) {
                edges[edgesLen++] = i;
                edges[edgesLen++] = edge.target;
                edges[edgesLen++] = edge.weight;

                endpoints[endpointsLen++] = i;
                endpoints[endpointsLen++] = edge.target;

                ++edgesLocsLen;
            }

            edgesLocs[2*i+1] = edgesLocsLen;
        }

        for (let i = 0; i < corners.length; i += 12) {
            corners.set(cornerTmpl, i);
        }

        // Update the constants.

        this._constants = Object.assign({}, this._constants, {nodeCount});

        // Create the buffers.

        buf.positionsA = app.createVertexBuffer(PicoGL.FLOAT, 2, positionsVboLen)
            .data(positions.subarray(0, 2 * nodeCount));

        buf.positionsB = app.createVertexBuffer(PicoGL.FLOAT, 2, positionsVboLen);

        // TODO: how to avoid this hack?
        buf.positionsA.numItems = nodeCount;
        buf.positionsB.numItems = nodeCount;

        buf.velocitiesA = app.createVertexBuffer(PicoGL.FLOAT, 2, 2 * nodeCount);
        buf.velocitiesB = app.createVertexBuffer(PicoGL.FLOAT, 2, 2 * nodeCount);
        buf.masses = app.createVertexBuffer(PicoGL.FLOAT, 1, masses);
        buf.edgesLocs = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 2, edgesLocs);
        buf.endpoints = app.createVertexBuffer(PicoGL.UNSIGNED_INT, 1, endpoints);
        buf.corners = app.createVertexBuffer(PicoGL.FLOAT, 2, corners);

        // Create the textures.

        tex.bounds = createFloatTexture(app, 1, 1, 4);
        tex.grid = createFloatTexture(app, gridSize, gridSize, 4);
        tex.pyramid = createFloatTexture(app, gridSize - 2, gridSize / 2, 4);

        tex.positionsA = createFloatTexture(app, posTexSize, posTexSize, 2).data(positions);
        tex.positionsB = createFloatTexture(app, posTexSize, posTexSize, 2);

        tex.edges = createFloatTexture(app, edgTexSize, edgTexSize, 3).data(edges);

        tex.viewportGrid = createFloatTexture(app, vpGridShape[0], vpGridShape[1], 1);
    }

    _clear() {
        this._app
            .defaultDrawFramebuffer()
            .viewport(0, 0, this._app.width, this._app.height)
            .clearColor(0, 0, 0, 0)
            .clear();
    }

    _turn() {
        const buf = this._buffers;
        const tex = this._textures;
        const steps = this._steps;

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

        this._clear();

        if (this._shouldDraw) {
            steps.drawEdges(buf.endpoints, tex.positionsA);
            steps.drawNodes(buf.corners, tex.positionsA, this._constants.nodeCount);

            if (this._shouldDrawLabels) {
                steps.selectNodes(buf.positionsA, buf.masses, this._viewport, tex.viewportGrid);
                steps.drawLabels(buf.corners, tex.viewportGrid, tex.positionsA);
            }
        }

        [buf.positionsA, buf.positionsB] = [buf.positionsB, buf.positionsA];
        [buf.velocitiesA, buf.velocitiesB] = [buf.velocitiesB, buf.velocitiesA];
        [tex.positionsA, tex.positionsB] = [tex.positionsB, tex.positionsA];
    }
}

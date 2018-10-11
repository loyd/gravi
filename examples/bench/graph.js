'use strict';

const {Graph} = gravi;

const canvas = document.createElement('canvas');

const relax = 100; // [ms]
const warmup = 1000;
const steps = 1000;
const times = 10;

const config = {
    deltaT: 1,
    springCoef: 1,
    springLength: 30,
    repulseCoef: 1000,
    theta: 0.8,
    dragCoef: 5,
    gravityCoef: 10,
    shouldDraw: false,
};

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function generateGraph(nodeCount, edgeCount) {
    const nodes = [];

    for (let i = 0; i < nodeCount; ++i) {
        nodes.push({});
    }

    const edges = [];

    for (let i = 0; i < edgeCount; ++i) {
        const source = Math.random() * nodeCount | 0;
        const target = Math.random() * nodeCount | 0;

        if (source !== target) {
            edges.push({source, target});
        }
    }

    return {nodes, edges};
}

async function measureOnce(nodeCount, edgeCount) {
    const {nodes, edges} = generateGraph(nodeCount, edgeCount);

    const graph = new Graph(canvas)
        .configure(config)
        .addNodes(nodes)
        .addEdges(edges);

    for (let i = 0; i < warmup; ++i) {
        graph.step();
    }

    await wait(relax);

    const start = Date.now();

    for (let i = 0; i < steps; ++i) {
        graph.step();
    }

    const spent = Date.now() - start;

    graph.halt();
    canvas.width = canvas.width;

    return spent / steps;
}

async function measure(nodeCount, edgeCount) {
    let spent = 0;

    for (let i = 0; i < times; ++i) {
        spent += await measureOnce(nodeCount, edgeCount);
        await wait(relax);
    }

    return spent / times;
}

async function grid(name, variants, cb) {
    console.time(name);
    console.log(name);

    for (const [nodeCount, edgeCount] of variants) {
        const spent = await measure(nodeCount, edgeCount);
        const fix = spent < 1 ? 2 : spent < 10 ? 1 : 0;
        console.log(nodeCount, edgeCount, +spent.toFixed(fix));
    }

    console.timeEnd(name);
}

grid('both', [[10, 10], [100, 100], [1000, 1000], [5000, 5000], [10000, 10000], [30000, 30000]])
    .then(() => {
        grid('edges', [[1000, 10], [1000, 100], [1000, 1000], [1000, 5000], [1000, 10000], [1000, 50000]])
    });

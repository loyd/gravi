'use strict';

const {Graph} = gravi;

const canvas = document.getElementById('area');
const form = document.getElementById('control');

let graph = null;

function grabNum(item) {
    const num = Number(item.value);
    console.assert(!isNaN(num));
    return num;
}

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

function run() {
    if (graph) {
        graph.halt();
        canvas.width = canvas.width;
    }

    const nodeCount = grabNum(form.nodeCount);
    const edgeCount = grabNum(form.edgeCount);
    const {nodes, edges} = generateGraph(nodeCount, edgeCount);

    graph = new Graph(canvas)
        .configure({
            deltaT: grabNum(form.deltaT),
            springCoef: grabNum(form.springCoef),
            springLength: grabNum(form.springLength),
            repulseCoef: grabNum(form.repulseCoef),
            theta: grabNum(form.theta),
            dragCoef: grabNum(form.dragCoef),
            gravityCoef: grabNum(form.gravityCoef),
            shouldDrawLabels: form.drawLabels.checked,
        })
        .addNodes(nodes)
        .addEdges(edges)
        .run();
}

function tryRun() {
    try {
        run();
    } catch (ex) {
        console.error(ex);
    }
}

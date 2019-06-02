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

const generators = {
    random(nodeCount, edgeCount) {
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
                edges.push({source: target, target: source});
            }
        }

        return {nodes, edges};
    },
    tree(nodeCount) {
        const nodes = [];
        const edges = [];

        const count = Math.pow(2, Math.ceil(Math.log2(nodeCount)));

        nodes.push({name: '1'});

        for (let level = 1; level < count; ++level) {
            const root = String(level);
            const left = String(level * 2);
            const right = String(level * 2 + 1);

            nodes.push({name: left});
            nodes.push({name: right});
            edges.push({source: root, target: left});
            edges.push({source: left, target: root});
            edges.push({source: root, target: right});
            edges.push({source: right, target: root});
        }

        return {nodes, edges};
    },
    complete(nodeCount) {
        const nodes = [];
        const edges = [];

        for (let i = 0; i < nodeCount; ++i) {
            nodes.push({});

            for (let j = 0; j < nodeCount; ++j) {
                if (i !== j) {
                    edges.push({source: i, target: j});
                }
            }
        }

        return {nodes, edges};
    },
}

function run() {
    if (graph) {
        graph.halt();
        canvas.width = canvas.width;
    }

    const kind = form.kind.value;

    const nodeCount = grabNum(form.nodeCount);
    const edgeCount = grabNum(form.edgeCount);
    const {nodes, edges} = generators[kind](nodeCount, edgeCount);

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

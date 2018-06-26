'use strict';

const {Graph} = gravi;

const canvas = document.getElementById('area');

const graph = new Graph(canvas)
    .addNodes([
        {name: 'one', x: 100, y: 200},
        {name: 'two', x: 400, y: 400},
    ])
    .addEdges([
        {source: 'one', target: 'two'},
    ]);

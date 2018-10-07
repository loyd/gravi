'use strict';

const {Graph} = gravi;

const canvas = document.getElementById('area');

const graph = new Graph(canvas)
    .addNodes([
        {name: 'one', x: 100, y: 200},
        {name: 'two', x: 350, y: 350},
        {name: 'three', x: 150, y: 300},
        {name: 'four', x: -50, y: 0},
    ])
    .addEdges([
        {source: 'one', target: 'two'},
        {source: 'three', target: 'four'},
    ]);

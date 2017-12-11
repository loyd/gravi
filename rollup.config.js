import assert from 'assert';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import glsl from 'rollup-plugin-glsl';
import uglify from 'rollup-plugin-uglify';
import istanbul from 'rollup-plugin-istanbul';
import pkg from './package.json';

const target = process.env.TARGET;
assert(['dev', 'test', 'cov', 'prod'].includes(target));

const is = x => target === x;

const entry = is('test') || is('cov') ? 'tests/index' : 'src/index';

const glslFiles = ['src/shaders/**.vert', 'src/shaders/**.frag'];
const jsFiles = ['src/**/*.js'];

const plugins = [
    babel({exclude: glslFiles}),
    glsl({include: glslFiles}),
    resolve(),
];

const sourcemap = is('prod') || is('cov') ? false : 'inline';

const umd = {
    input: entry,
    output: {
        file: pkg.browser,
        format: 'umd',
    },
    name: pkg.name,
    plugins: [
        is('cov') && istanbul({include: jsFiles}),
        ...plugins,
        commonjs(),
        is('prod') && uglify(),
    ],
    sourcemap,
};

const esm = {
    input: entry,
    output: [
        {file: pkg.main, format: 'cjs'},
        {file: pkg.module, format: 'es'},
    ],
    plugins,
    sourcemap,
};

export default is('test') || is('cov') ? umd : [umd, esm];

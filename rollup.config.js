import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './src/cjs/hayaml.js',
    output: {
        file: 'dist/umd/hayaml.js',
        format: 'umd',
        name: 'HAYAML' // The global variable name for your library
    },
    plugins: [
        commonjs(), // This plugin converts your CJS code into ESM
        nodeResolve()
    ]
};

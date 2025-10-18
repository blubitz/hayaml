export default {
    input: './dist/esm/hayaml.mjs',
    output: {
        file: 'dist/umd/hayaml.js',
        format: 'umd',
        name: 'HAYAML' // The global variable name for your library
    }
};

export default {
    entry: 'src/index.ts',
    esm: 'rollup',
    cjs: {
        type: 'rollup',
        lazy: true,
    }
}
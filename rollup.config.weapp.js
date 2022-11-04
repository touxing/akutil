import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import sourceMaps from 'rollup-plugin-sourcemaps'
import { terser } from 'rollup-plugin-terser'
import babel from '@rollup/plugin-babel'
// import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import path from 'path'

const isProduction = process.env.BUILD === 'production'

function resolvePath(str) {
  return path.resolve(__dirname, str)
}

const rollupConfig = {
  input: `src/weapp/request/index.ts`,
  output: [
    { file: 'dist/weapp/wxRequest.cjs.js', format: 'cjs', sourcemap: true },
    { file: 'dist/weapp/wxRequest.esm.js', format: 'esm', sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/weapp/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    sourceMaps(),
    isProduction && terser(),
  ].filter(Boolean),
}

export default rollupConfig

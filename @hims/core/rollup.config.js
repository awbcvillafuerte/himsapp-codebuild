import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
// import sass from "rollup-plugin-sass";
// import nodeSass from 'node-sass';
// import postcss from 'postcss';
import postcss from 'rollup-plugin-postcss-modules';

import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';

import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  treeshake: true,
  plugins: [
    external({
      includeDependencies: true,
    }),
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    // sass({
    //   output: true,
    //   runtime: nodeSass,
    //   // processor: css => postcss([autoprefixer])
    //   //     .process(css)
    //   //     .then(result => result.css),
    // }),
    postcss({
      extract: true, // extracts to `${basename(dest)}.css`
      syntax: 'postcss-scss',
      writeDefinitions: true,
    }),
    url(),
    svgr(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/__tests__/**',
      clean: true,
    }),
    commonjs(),
  ],
};

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
const svgr = require('@svgr/rollup').default;
const packageJson = require('./package.json');
import replace from '@rollup/plugin-replace';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

export default [
  {
    input: packageJson.source,
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'react-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css'],
      }),
      terser(),
      svgr(),
      replace({
        include: ['./src/assets/index.ts'],
        preventAssignment: true,
        // Replace ReactComponent to allow resolution of SVG files under Rollup
        ReactComponent: 'default',
      }),
    ],
  },
  {
    input: 'dist/dts/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.css$/, /\.stories\.tsx$/],
    plugins: [dts(), del({ hook: 'buildEnd', targets: './dist/dts' })],
  },
];

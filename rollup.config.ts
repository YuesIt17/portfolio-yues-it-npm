import {defineConfig} from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import url from '@rollup/plugin-url';

import * as fs from 'fs';
import path from 'path';

const PACKAGE_NAME = process.cwd();
const packageJson = JSON.parse(fs.readFileSync(path.join(PACKAGE_NAME, 'package.json'), 'utf-8'));

const includePaths = ['**/*.woff', '**/*.woff2', '**/*.svg', '**/*.png'];

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: false,
      name: packageJson.name,
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: false,
      name: packageJson.name,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({tsconfig: './tsconfig.json'}),
    terser(),
    url({
      fileName: '[name][extname]',
      include: includePaths,
      limit: 0,
    }),
  ],
  external: [...Object.keys(packageJson.peerDependencies || {})],
});

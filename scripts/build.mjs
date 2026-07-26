import { execFileSync } from 'node:child_process';
import { readFileSync, rmSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

rmSync('dist', { recursive: true, force: true });

const options = {
  bundle: true,
  entryPoints: ['src/index.ts'],
  external: ['lz-string'],
  legalComments: 'none',
  minify: false,
  platform: 'neutral',
  sourcemap: true,
  target: 'es2020',
};

await Promise.all([
  build({ ...options, format: 'cjs', outfile: 'dist/index.js' }),
  build({ ...options, format: 'esm', outfile: 'dist/index.mjs' }),
]);

const tsc = fileURLToPath(
  new URL('../node_modules/typescript/bin/tsc', import.meta.url)
);
execFileSync(process.execPath, [tsc, '-p', 'tsconfig.build.json'], {
  stdio: 'inherit',
});

const exports = [
  ...readFileSync('src/index.ts', 'utf8').matchAll(
    /export \{ (\w+) \} from '([^']+)'/g
  ),
];
const declarations = exports.map(([, name, source]) => {
  const declarationPath = `dist/${source.slice(2)}.d.ts`;
  const declaration = readFileSync(declarationPath, 'utf8')
    .replace(/^export \{\};?\s*$/gm, '')
    .replace(/\bexport declare\b/g, 'declare');
  rmSync(declarationPath.slice(0, declarationPath.lastIndexOf('/')), {
    recursive: true,
    force: true,
  });
  return declaration;
});
const bundled = `${declarations.join('\n\n')}\n\nexport { ${exports
  .map(([, name]) => name)
  .join(', ')} };\n`;
writeFileSync('dist/index.d.ts', bundled);
writeFileSync('dist/index.d.mts', bundled);

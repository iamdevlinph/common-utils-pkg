import fs from 'fs';
import { readdir } from 'fs/promises';
import path from 'path';

const SRC_DIR = 'src';
const INDEX_FILE = path.join(SRC_DIR, 'index.ts');

const toCamelCase = (str) =>
  str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());

async function generateIndex() {
  const dirents = await readdir(SRC_DIR, { withFileTypes: true });
  const exports = [];

  for (const dirent of dirents) {
    if (!dirent.isDirectory()) continue;

    const methodName = dirent.name;
    const filePath = path.join(SRC_DIR, methodName, `${methodName}.ts`);

    // skip if file does not exist
    if (!fs.existsSync(filePath)) continue;

    const exportName = toCamelCase(methodName);

    exports.push(
      `export { ${exportName} } from './${methodName}/${methodName}';`
    );
  }

  const content = exports.join('\n') + '\n';
  fs.writeFileSync(INDEX_FILE, content);
  console.log(`Generated ${INDEX_FILE}`);
}

generateIndex();

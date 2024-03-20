import * as documentation from 'documentation';
import fs from 'fs';
import { readdir } from 'fs/promises';

const OUTPUT_DIR = 'docusaurus/';

/**
 * Delete OUTPUT_DIR before building
 * then create again
 */
fs.rmSync(OUTPUT_DIR, { recursive: true, force: true });
fs.mkdirSync(OUTPUT_DIR);

/**
 * Get all method paths from src/
 * Create path as src/method/method.ts
 */
const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => `src/${dirent.name}/${dirent.name}.ts`);

const methodDirectory = await getDirectories('src/');

/**
 * Loop each directory to generate markdown
 */
methodDirectory.forEach(async (directory) => {
  /**
   * Get method info by getting as JSON first
   * since i don't know how to access this when formatting by markdown
   */
  const jsonFormat = await documentation
    .build([directory])
    .then(documentation.formats.json)
    .then((jsonOutput) => JSON.parse(jsonOutput));

  /**
   * Create needed folders
   * Skip if already created
   */
  const moduleName = jsonFormat[0].tags[1].name;
  const OUTPUT_PATH = OUTPUT_DIR + moduleName;
  // const OUTPUT_PATH = OUTPUT_DIR;
  if (!fs.existsSync(OUTPUT_PATH)) {
    fs.mkdirSync(OUTPUT_PATH);
  }

  /**
   * The actual converting to markdown
   * Handle folder structuring also
   *
   * Structure would be
   * [Module Name]
   *  - Method A
   *  - Method B
   */
  const methodName = jsonFormat[0].tags[2].name;
  const OUTPUT_FILE_PATH = OUTPUT_PATH + '/' + methodName + '.md';
  documentation
    .build([directory])
    .then(documentation.formats.md)
    .then((output) => {
      console.info('Writing to:', OUTPUT_FILE_PATH);
      // replace ##title with #title for docusaurus
      const strippedOutput = output.replace(/^##\n?/m, '#');

      // // output is a string of Markdown data
      fs.writeFileSync(OUTPUT_FILE_PATH, strippedOutput);
    });
});

import * as documentation from 'documentation';
import fs from 'fs';
import { readdir } from 'fs/promises';

const OUTPUT_DIR = 'docs-md/api/';
const SOURCE_DIR_URL =
  'https://github.com/iamdevlinph/common-utils-pkg/blob/main/src/';

/**
 * Check if OUTPUT_DIR exists before building
 * create if needed
 */
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}
// generate the _category_.json for docusaurus again
fs.writeFileSync(
  `${OUTPUT_DIR}/_category_.json`,
  JSON.stringify({
    label: 'API',
    position: 2,
    link: {
      type: 'generated-index',
      description: 'API reference for available methods.',
    },
  })
);

/**
 * Get all method paths from src/
 * Create path as src/method/method.ts
 */
const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const methodDirectory = await getDirectories('src/');

/**
 * Loop each directory to generate markdown
 */
methodDirectory.forEach(async (methodName) => {
  console.log('🍉 ~ methodDirectory.forEach ~ methodName:', methodName);
  const directory = `src/${methodName}/${methodName}.ts`;
  // const directory = 'src/array-remove-item/array-remove-item.ts';
  /**
   * Get method info by getting as JSON first
   * since i don't know how to access this when formatting by markdown
   */
  const jsonFormat = await documentation
    .build([directory], { shallow: true })
    .then(documentation.formats.json)
    .then((jsonOutput) => JSON.parse(jsonOutput));

  /**
   * Create needed folders
   * Skip if already created
   */
  const moduleName = jsonFormat[0].tags[1].name;
  const codeLineStart = jsonFormat[0].context.loc.start.line;
  const codeLineEnd = jsonFormat[0].context.loc.end.line;
  // console.log('🍉 ~ methodDirectory.forEach ~ jsonFormat[0]:', jsonFormat[0]);
  // console.log(
  //   '🍉 ~ methodDirectory.forEach ~ jsonFormat[0]:',
  //   jsonFormat[0].context.loc
  // );
  // const OUTPUT_PATH = OUTPUT_DIR + moduleName;
  const OUTPUT_PATH = OUTPUT_DIR;
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
  const methodNameFull = jsonFormat[0].tags[2].name;
  const OUTPUT_FILE_PATH = OUTPUT_PATH + '/' + methodNameFull + '.md';
  documentation
    .build([directory], { parseExtension: ['ts'] })
    .then(documentation.formats.md)
    .then((output) => {
      console.info('Writing to:', OUTPUT_FILE_PATH);
      // replace ##title with #title for docusaurus
      let strippedOutput = output.replace(/^##\n?/m, '#');

      // Add file source to the bottom of markdown
      const fileUrl = generateFileUrl(methodName, codeLineStart, codeLineEnd);
      strippedOutput += `\n\n* Source: [${methodName}.ts](${fileUrl})`;

      // // output is a string of Markdown data
      fs.writeFileSync(OUTPUT_FILE_PATH, strippedOutput);
    });
});

function generateFileUrl(moduleName, lineStart, lineEnd) {
  return `${SOURCE_DIR_URL}${moduleName}/${moduleName}.ts#L${lineStart}-L${lineEnd}`;
}

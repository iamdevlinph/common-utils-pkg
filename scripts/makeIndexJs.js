const fs = require('fs');
const path = require('path');
const COLORS = require('./colors');

console.info(`\n${COLORS.FgGreen}Generate new index.js file${COLORS.end}`);
const srcPath = path.join(__dirname, '/../src');
const srcIndexFile = `${srcPath}/index.js`;

function createIndexFile(methods) {
  console.info(`${COLORS.FgGreen}Creating src/index.js${COLORS.end}`);
  methods.forEach((method) => {
    const code = `export { default as ${method} } from './${method}/${method}';\n`;
    fs.appendFileSync(srcIndexFile, code, (indexWriteErr) => {
      if (indexWriteErr) {
        console.info(`${COLORS.FgRed}ERROR cannot append ${method} to src/index.js${COLORS.end}`);
      }
    });
  });
  console.info(`${COLORS.FgGreen}SUCCESS src/index.js created${COLORS.end}`);
}

console.info(`${COLORS.FgGreen}Reading methods${COLORS.end}`);
fs.readdir(srcPath, (err, files) => {
  const methods = [];
  if (err) {
    console.info(`${COLORS.FgRed}ERROR cannot read directory${COLORS.end}`);
  }

  // only get folders
  files.forEach((file) => {
    const filesToIgnore = [
      'index.d.ts',
      'index.js',
      'expects'
    ];
    if (!filesToIgnore.includes(file)) {
      methods.push(file);
    }
  });

  // remove src/index.js
  try {
    if (fs.existsSync(srcIndexFile)) {
      fs.unlink(srcIndexFile, (unlinkErr) => {
        if (unlinkErr) {
          console.info(`${COLORS.FgRed}ERROR cannot delete src/index.js${COLORS.end}`);
        }
        console.info(`${COLORS.FgGreen}Deleted src/index.js${COLORS.end}`);
        createIndexFile(methods);
      });
    } else {
      console.info(`${COLORS.FgGreen}src/index.js does not exist${COLORS.end}`);
      createIndexFile(methods);
    }
  } catch (cannotCheckIndexFile) {
    console.info(`${COLORS.FgRed}ERROR cannot check if src/index.js exists${COLORS.end}`);
  }
});

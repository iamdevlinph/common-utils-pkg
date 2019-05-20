const fs = require('fs');
const path = require('path');
const COLORS = require('./colors');

console.info(`\n${COLORS.FgGreen}Generate new index.d.ts file${COLORS.end}`);
const srcPath = path.join(__dirname, '/../src');
const typeDefFile = `${srcPath}/index.d.ts`;

function getDataType(tag) {
  let newType;
  if (tag.title === 'returns') {
    newType = tag.type.name.toLowerCase();
  }

  if (tag.title === 'param') {
    let type;
    if (tag.type.type === 'OptionalType') {
      type = 'optional';
    }
    if (tag.type.type === 'AllLiteral') {
      type = 'all';
    }
    switch (type) {
      case 'optional':
        newType = tag.type.expression.name.toLowerCase();
        break;
      case 'all':
        newType = 'any';
        break;
      default:
        newType = tag.type.name.toLowerCase();
    }
  }

  switch (newType) {
    case 'anyarray':
      newType = 'any[]';
      break;
    case 'stringarray':
      newType = 'string[]';
      break;
  }

  return newType;
}

function removeLastComma(string) {
  const lastCommaIdx = string.lastIndexOf(', ');
  if (lastCommaIdx === -1) {
    return string;
  }
  return string.slice(0, lastCommaIdx);
}

function createIndexFile(methods) {
  console.info(`${COLORS.FgGreen}Creating src/index.d.ts${COLORS.end}`);
  methods.forEach((method) => {
    let exportString = 'export function';
    let paramLen = 0;
    let hasReturn = false;
    method.tags.forEach((tag) => {
      switch (tag.title) {
        case 'name':
          exportString = `${exportString} ${tag.name}(`;
          break;
        case 'param': {
          const optional = tag.type.type === 'OptionalType';
          const questionMark = optional ? '?' : '';
          exportString = `${exportString}${tag.name}${questionMark}: ${getDataType(tag)}, `;
          paramLen += 1;
          break;
        }
        case 'returns': {
          if (paramLen > 0) {
            exportString = removeLastComma(exportString);
          }
          exportString = `${exportString}): ${getDataType(tag)};`;
          hasReturn = true;
          break;
        }
      }
    });
    if (!hasReturn) {
      exportString = removeLastComma(exportString);
      exportString = `${exportString}): void;`;
    }
    fs.appendFileSync(typeDefFile, `${exportString}\n\n`, (appendError) => {
      if (appendError) {
        console.info(`${COLORS.FgRed}ERROR cannot append ${method.tags[0].name} to src/index.d.ts${COLORS.end}`);
      }
    });
  });
  console.info(`${COLORS.FgGreen}SUCCESS src/index.d.ts created${COLORS.end}`);
}

console.info(`${COLORS.FgGreen}Reading methods${COLORS.end}`);
fs.readFile('docs/source.json', 'utf8', (err, data) => {
  if (err) {
    console.info(`${COLORS.FgRed}ERROR cannot read docs/source.json${COLORS.end}`);
  }
  const methods = JSON.parse(data);

  // remove src/index.d.ts
  try {
    if (fs.existsSync(typeDefFile)) {
      fs.unlink(typeDefFile, (unlinkErr) => {
        if (unlinkErr) {
          console.info(`${COLORS.FgRed}ERROR cannot delete src/index.d.ts${COLORS.end}`);
        }
        console.info(`${COLORS.FgGreen}Deleted src/index.d.ts${COLORS.end}`);
        createIndexFile(methods);
      });
    } else {
      console.info(`${COLORS.FgGreen}src/index.d.ts does not exist${COLORS.end}`);
      createIndexFile(methods);
    }
  } catch (cannotCheckIndexFile) {
    console.info(`${COLORS.FgRed}ERROR cannot check if src/index.d.ts exists${COLORS.end}`);
  }
});

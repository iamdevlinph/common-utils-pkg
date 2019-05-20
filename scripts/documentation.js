const fs = require('fs');
const COLORS = require('./colors');

console.info(`\n${COLORS.BgBlue}${COLORS.FgWhite}START documentation generation${COLORS.end}`);
console.info(`${COLORS.FgGreen}source.json file has been generated${COLORS.end}\n`);
console.info(`${COLORS.FgYellow}START clean up of source.json${COLORS.end}`);

// assuming only that the description is just plain text
function getDesc(descArr) {
  let descString = '';
  descArr.forEach((desc) => {
    descString += desc.value;
  });
  return descString;
}

// get param details
function getParamType(param) {
  switch (param.type.type) {
    case 'OptionalType':
      return param.type.expression.name;
    case 'AllLiteral':
      return '*';
    default:
      return param.type.name;
  }
}

// only get needed args data
function getArgs(params) {
  const returnArgs = [];
  params.forEach((val) => {
    returnArgs.push({
      description: val.description,
      param: val.name,
      type: getParamType(val),
      optional: (val.type.type === 'OptionalType')
    });
  });
  return returnArgs;
}

// append params to util name
function appendParamsToName(name, params) {
  let appendedName = `${name}(`;
  params.forEach((val, i, arr) => {
    appendedName += val.optional ? `[${val.param}]` : val.param;
    // add comma if not yet last index
    if (i !== arr.length - 1) {
      appendedName += ', ';
    }
  });
  appendedName += ')';
  return appendedName;
}

// iterate through the generated source.json file
// get only the needed data for documentation
// store it to mapped_source.json file
const utils = {};
fs.readFile('docs/source.json', 'utf8', (err, data) => {
  const methods = JSON.parse(data);
  methods.forEach((val) => {
    // create a module entry if it doesnt exist yet
    const moduleName = val.tags[0].name;
    if (!(moduleName in utils)) {
      utils[moduleName] = [];
    }
    const utilObj = {
      description: getDesc(val.description.children[0].children),
      args: []
    };
    val.tags.forEach((tag) => {
      switch (tag.title) {
        case 'module':
          utilObj.module = tag.name;
          break;
        case 'name':
          utilObj.method = tag.name;
          break;
        case 'param':
          utilObj.args.push(tag);
          break;
        case 'returns':
          utilObj.returns = {
            desc: tag.description,
            type: tag.type.name
          };
          break;
        case 'example':
          utilObj.example = tag.description;
          break;
      }
    });
    utilObj.args = getArgs(utilObj.args);
    utilObj.utilArgs = appendParamsToName(utilObj.method, utilObj.args);
    const lineStart = val.context.loc.start.line;
    const lineEnd = val.context.loc.end.line;
    const file = val.context.file.split('/common-utils-pkg/')[1];
    const sourceUrl = `https://github.com/iamdevlinph/common-utils-pkg/blob/master/${file}#L${lineStart}-L${lineEnd}`;
    utilObj.sourceUrl = sourceUrl;

    utils[moduleName].push(utilObj);
  });
  fs.writeFile('docs/mapped_source.json', JSON.stringify(utils, null, 2), (writeError) => {
    if (writeError) {
      console.info(`${COLORS.FgRed}ERROR mapped_source.json not generated${COLORS.end}`);
    } else {
      console.info(`${COLORS.FgGreen}generated mapped_source.json${COLORS.end}`);
    }
    console.info(`${COLORS.BgBlue}${COLORS.FgWhite}END documentation generation${COLORS.end}`);
  });
});

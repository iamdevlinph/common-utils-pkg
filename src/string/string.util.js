import CoreUtil from '../core/core.util';

const arrToString = (array, delimiter) => array.join(delimiter);

const toSentenceCase = (string) => {
  const returnStr = string.toLowerCase();
  return returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
};

// https://stackoverflow.com/a/196991/4620773
const toTitleCase = string => string.toLowerCase().replace(
  /\w\S*/g,
  txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
);


const StringUtil = {
  arrToString: CoreUtil.takes(arrToString, 'array'),
  toSentenceCase: CoreUtil.takes(toSentenceCase, 'string'),
  toTitleCase: CoreUtil.takes(toTitleCase, 'string')
};

export default StringUtil;

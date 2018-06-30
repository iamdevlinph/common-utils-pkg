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
  arrToString: CoreUtil.isExpected(arrToString, 'array'),
  toSentenceCase: CoreUtil.isExpected(toSentenceCase, 'string'),
  toTitleCase: CoreUtil.isExpected(toTitleCase, 'string')
};

export default StringUtil;

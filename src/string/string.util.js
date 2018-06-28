import CoreUtil from '../core/core.util';

const utilName = 'StringUtil';
const test = () => 'String OK';

/**
 *
 * @param {Array} arr array to change
 * @param {String} delimeter delimeter to use when changed to string
 */
const arrToString = (arr, delimeter) => {
  let retArrToString;
  if (!CoreUtil.isNull(arr, utilName)) {
    retArrToString = arr.join(delimeter);
  }
  return retArrToString;
};

/**
 *
 * @param {String} str string to change to sentence case
 */
const toSentenceCase = (str) => {
  let retToSentenceCase;
  if (!CoreUtil.isNull(str, utilName)) {
    const returnStr = str.toLowerCase();
    retToSentenceCase = returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
  }
  return retToSentenceCase;
};

/**
 *
 * @param {String} str string to change to title case
 */
const toTitleCase = (str) => {
  let retToTitleCase;
  if (!CoreUtil.isNull(str, utilName)) {
    const returnStr = str.toLowerCase();
    // https://stackoverflow.com/a/196991/4620773
    retToTitleCase = returnStr.replace(
      /\w\S*/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }
  return retToTitleCase;
};


const StringUtil = {
  test,
  toSentenceCase,
  arrToString,
  toTitleCase
};

export default StringUtil;

import CoreUtil from '../core/core.util';

const utilName = 'StringUtil';
const test = () => 'String OK';

/**
 *
 * @param {Array} arr array to change
 * @param {String} delimeter delimeter to use when changed to string
 */
const toString = (arr, delimeter) => {
  CoreUtil.isNull(arr, utilName);
  return arr.join(delimeter);
};

/**
 *
 * @param {String} str string to change to sentence case
 */
const toSentenceCase = (str) => {
  CoreUtil.isNull(str, utilName);
  const returnStr = str.toLowerCase();
  return returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
};

/**
 *
 * @param {String} str string to change to title case
 */
const toTitleCase = (str) => {
  CoreUtil.isNull(str, utilName);
  const returnStr = str.toLowerCase();
  // https://stackoverflow.com/a/196991/4620773
  return returnStr.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};


const StringUtil = {
  test,
  toSentenceCase,
  toString,
  toTitleCase
};

export default StringUtil;

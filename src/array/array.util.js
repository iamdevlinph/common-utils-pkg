import CoreUtil from '../core/core.util';

// const utilName = 'ArrayUtil';
const test = () => 'Array OK';

/**
 *
 * @param {String} str string to convert to array
 * @param {String} delimeter split on which
 */
const strToArray = (str, delimeter) => {
  let retStrToArray = null;
  if (CoreUtil.isExpected(str, 'string')) {
    retStrToArray = str.split(delimeter);
  }
  return retStrToArray;
};

const ArrayUtil = {
  test,
  strToArray
};

export default ArrayUtil;

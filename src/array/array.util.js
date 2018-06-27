import CoreUtil from '../core/core.util';

const utilName = 'ArrayUtil';
const test = () => 'Array OK';

/**
 *
 * @param {String} str string to convert to array
 * @param {String} delimeter split on which
 */
const toArray = (str, delimeter) => {
  CoreUtil.isNull(str, utilName);
  return str.split(delimeter);
};

const ArrayUtil = {
  test,
  toArray
};

export default ArrayUtil;

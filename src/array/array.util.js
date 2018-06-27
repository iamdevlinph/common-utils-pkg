const test = () => 'Array OK';

/**
 *
 * @param {Array} arr array to change
 * @param {String} delimeter delimeter to use when changed to string
 */
const toString = (arr, delimeter) => arr.join(delimeter);

const ArrayUtil = {
  test,
  toString
};

export default ArrayUtil;

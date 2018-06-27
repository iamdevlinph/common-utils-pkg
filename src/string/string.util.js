const test = () => 'String OK';

/**
 *
 * @param {Array} arr array to change
 * @param {String} delimeter delimeter to use when changed to string
 */
const toString = (arr, delimeter) => arr.join(delimeter);

const StringUtil = {
  test,
  toString
};

export default StringUtil;

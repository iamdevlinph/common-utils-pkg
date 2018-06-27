const test = () => 'Array OK';

/**
 *
 * @param {String} str string to convert to array
 * @param {String} delimeter split on which
 */
const toArray = (str, delimeter) => str && str.split(delimeter);

const ArrayUtil = {
  test,
  toArray
};

export default ArrayUtil;

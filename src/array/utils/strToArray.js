/**
 * Splits a string to an array on `delimeter`
 *
 * @category ArrayUtil
 * @param {String} string string to convert to array
 * @param {String} delimiter where to split the string
 * @returns {Array} Returns an array of the split string
 * @example
 *
 * ArrayUtil.strToArray('apple;banana;orange', ';');
 * // => ['apple', 'banana', 'orange']
 */
function strToArray(string, delimiter) {
  return string.split(delimiter);
}

export default strToArray;

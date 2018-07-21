// To Do: Accept an array of arguments
// Compare against an array of expected types

/**
 * Checks if the type of the value is the expected type.
 *
 * @module CoreUtil
 * @name argTypesMatch
 * @param {*} arg - any value to check
 * @param {String} expectedType - the type to check the value against
 * @returns {Boolean} Returns a boolean if the type of the value matches to expectedType.
 * @example
 *
 * CoreUtil.argTypesMatch(1, 'number');
 * // => true
 *
 * CoreUtil.argTypesMatch('abc', 'string');
 * // => false
 */
const argTypesMatch = (arg, expectedType) => {
  let flag = false;
  const argType = typeof arg;
  switch (expectedType) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'object':
      flag = argType === expectedType;
      break;
    case 'array':
      flag = Array.isArray(arg);
      break;
  }
  return flag;
};

export default argTypesMatch;

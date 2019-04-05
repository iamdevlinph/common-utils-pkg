// To Do: Accept an array of arguments
// Compare against an array of expected types

/**
 * Checks if the type of the value is the expected type.
 *
 * @module Core
 * @name doTypesMatch
 * @param {*} arg - any value to check
 * @param {String} expectedType - the type to check the value against
 * @returns {Boolean} Returns a boolean if the type of the value matches to expectedType.
 * @example
 *
 * doTypesMatch(1, 'number');
 * // => true
 *
 * doTypesMatch('abc', 'number');
 * // => false
 */
const doTypesMatch = (arg, expectedType) => {
  let flag = false;
  const argType = typeof arg;
  switch (expectedType) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'function':
    case 'undefined':
      flag = argType === expectedType;
      break;
    case 'object':
      flag = arg.constructor === Object;
      break;
    case 'array':
      flag = Array.isArray(arg);
      break;
    case 'null':
      flag = arg === null;
      break;
  }
  return flag;
};

export default doTypesMatch;

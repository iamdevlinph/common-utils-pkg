import expects from '../expects/expects';

/**
 * Converts a string to Sentence case.
 *
 * @module String
 * @name toSentenceCase
 * @param {String} string string to convert to Sentence case
 * @returns {String} Returns a Sentence case string.
 * @example
 *
 * toSentenceCase('THE QUICK BROWN FOX');
 * // => 'The quick brown fox'
 */
const toSentenceCase = (string) => {
  const returnStr = string.toLowerCase();
  return returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
};

export default expects(
  toSentenceCase,
  'toSentenceCase',
  {
    0: 'string'
  }
);

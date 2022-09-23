/**
 * Converts a string to Sentence case.
 *
 * @version 1.0.0
 * @module String
 * @name toSentenceCase
 * @param {String} string string to convert to Sentence case
 * @returns {String} Returns a Sentence case string.
 * @example
 *
 * toSentenceCase('THE QUICK BROWN FOX');
 * // => 'The quick brown fox'
 */
export const toSentenceCase = (string: string) => {
  const returnStr = string.toLowerCase();
  return returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
};

/**
 * Converts a string to Sentence case.
 *
 * @version 1.0.0
 * @module String
 * @name toSentenceCase
 * @param {string} string to convert to Sentence case
 * @returns {string} in sentence case.
 * @example
 *
 * toSentenceCase('THE QUICK BROWN FOX');
 * // => 'The quick brown fox'
 */
export const toSentenceCase = (string: string) => {
  const returnStr = string.toLowerCase();
  return returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
};

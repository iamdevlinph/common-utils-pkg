/**
 * Converts a string to Sentence case.
 *
 * @module String
 * @name toSentenceCase
 * @param string string to convert to Sentence case
 * @returns returns a Sentence case string.
 * @example
 *
 * toSentenceCase('THE QUICK BROWN FOX');
 * // => 'The quick brown fox'
 */
export const toSentenceCase = (string: string) => {
  const returnStr = string.toLowerCase();
  return returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
};

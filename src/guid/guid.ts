/**
 * Generates a GUID.
 *
 * @version 1.0.0
 * @module Key
 * @name guid
 * @returns {string} of guid.
 * @example
 *
 * guid();
 * // => "0153a717-3ba2-b1ac-67f1-49db6551a28d"
 */

export const guid = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

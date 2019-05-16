/**
 * Generates a GUID.
 *
 * @module Key
 * @name guid
 * @returns {String} guid string
 * @example
 *
 * guid();
 * // => "0153a717-3ba2-b1ac-67f1-49db6551a28d"
 */
const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
};

export default guid;

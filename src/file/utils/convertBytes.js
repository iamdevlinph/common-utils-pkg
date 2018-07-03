const isWholeNum = number => number % 1 === 0;

/**
 * Converts a number of bytes to a human readable file size
 *
 *
 * @category FileUtil
 * @param {Number} bytes number of bytes to show
 * @param {Number} decimals number of decimals to show
 * @returns {String} Returns a human readable file size.
 * @example
 *
 * FileUtil.convertBytes(1234);
 * // => 1.205078125 kB
 *
 * FileUtil.convertBytes(1234, 2);
 * // => 1.21 kB
 */
const convertBytes = (bytes, decimals) => {
  const units = ['byte(s)', 'kB', 'MB', 'GB', 'TB', 'PB'];
  const number = Math.floor(Math.log(bytes) / Math.log(1024));
  const converted = bytes / (1024 ** Math.floor(number));
  const unit = units[number];
  const formatted = isWholeNum(converted) || !decimals ? converted : converted.toFixed(decimals);
  return `${formatted} ${unit}`;
};

export default convertBytes;

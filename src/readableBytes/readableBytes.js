import expects from '../expects/expects';

const isWholeNum = number => number % 1 === 0;

/**
 * Converts a number of bytes to a human readable file size.
 *
 * @module File
 * @name readableBytes
 * @param {Number} bytes number of bytes to show
 * @param {Number} [decimals] optional number of decimals to show
 * @returns {String} Returns a human readable file size.
 * @example
 *
 * readableBytes(1234);
 * // => 1.205078125 kB
 *
 * readableBytes(1234, 2);
 * // => 1.21 kB
 */
const readableBytes = (bytes, decimals = null) => {
  const units = ['byte(s)', 'kB', 'MB', 'GB', 'TB', 'PB'];
  const number = Math.floor(Math.log(bytes) / Math.log(1024));
  const converted = bytes / (1024 ** Math.floor(number));
  const unit = units[number];
  const formatted = isWholeNum(converted) || !decimals ? converted : converted.toFixed(decimals);
  return `${formatted} ${unit}`;
};

export default expects(
  readableBytes,
  'readableBytes',
  {
    0: 'number'
  },
  {
    1: 'number'
  }
);

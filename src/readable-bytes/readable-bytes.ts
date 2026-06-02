const isWholeNum = (number: number) => number % 1 === 0;

const units = ['byte(s)', 'kB', 'MB', 'GB', 'TB', 'PB'] as const;
/**
 * Converts a number of bytes to a human readable file size.
 *
 * @version 1.0.0
 * @module File
 * @name readableBytes
 * @param {number} bytes of bytes to show
 * @param {Object} [options] user provided options object
 * @param {number} [options.decimals] optional number of decimals to show
 * @param {'byte(s)'|'kB'|'MB'|'GB'|'TB'|'PB'} [options.minUnit] - minimum unit to display; if undefined, the most appropriate unit is selected automatically
 * @returns {string} of human readable file size.
 * @example
 *
 * readableBytes(1234);
 * // => 1.205078125 kB
 *
 * readableBytes(1234, { decimals: 2 });
 * // => 1.21 kB
 *
 * readableBytes(500, { minUnit: 'kB' });
 * // => 0.48828125 kB
 *
 * readableBytes(500, { decimals: 2, minUnit: 'kB' });
 * // => 0.49 kB kB
 */
type ReadableBytesOptions = {
  decimals?: number;
  minUnit?: (typeof units)[number];
};

export const readableBytes = (
  bytes: number,
  options?: ReadableBytesOptions
) => {
  const { decimals = 0, minUnit } = options || {};

  const number = Math.floor(Math.log(bytes) / Math.log(1024));
  const minUnitIndex = minUnit === undefined ? number : units.indexOf(minUnit);

  const unitIndex = Math.max(number, minUnitIndex);
  const converted = bytes / 1024 ** unitIndex;
  const unit = units[unitIndex];

  const formatted =
    isWholeNum(converted) || !decimals
      ? converted
      : converted.toFixed(decimals);

  return `${formatted} ${unit}`;
};

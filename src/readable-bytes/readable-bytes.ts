const isWholeNum = (number) => number % 1 === 0;

/**
 * Converts a number of bytes to a human readable file size.
 *
 * @module File
 * @name readableBytes
 * @param bytes number of bytes to show
 * @param decimals optional number of decimals to show
 * @returns returns a human readable file size
 * @example
 *
 * readableBytes(1234);
 * // => 1.205078125 kB
 *
 * readableBytes(1234, 2);
 * // => 1.21 kB
 */
export const readableBytes = (bytes: number, decimals = 0) => {
  const units = ['byte(s)', 'kB', 'MB', 'GB', 'TB', 'PB'];
  const number = Math.floor(Math.log(bytes) / Math.log(1024));
  const converted = bytes / 1024 ** Math.floor(number);
  const unit = units[number];
  const formatted =
    isWholeNum(converted) || !decimals
      ? converted
      : converted.toFixed(decimals);
  return `${formatted} ${unit}`;
};

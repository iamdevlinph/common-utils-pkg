import CoreUtil from '../core/core.util';

const isWholeNum = number => number % 1 === 0;

const convertBytes = (bytes, decimals) => {
  const units = ['byte(s)', 'kB', 'MB', 'GB', 'TB', 'PB'];
  const number = Math.floor(Math.log(bytes) / Math.log(1024));
  const converted = bytes / (1024 ** Math.floor(number));
  const unit = units[number];
  const formatted = isWholeNum(converted) || !decimals ? converted : converted.toFixed(decimals);
  return `${formatted} ${unit}`;
};

const FileUtil = {
  convertBytes: CoreUtil.isExpected(convertBytes, 'number')
};

export default FileUtil;

import CoreUtil from '../core/core.util';

const strToArray = (string, delimiter) => string.split(delimiter);

const ArrayUtil = {
  strToArray: CoreUtil.isExpected(strToArray, 'string')
};

export default ArrayUtil;

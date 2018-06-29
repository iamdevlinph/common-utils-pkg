import CoreUtil from '../core/core.util';

const strToArray = (str, delimeter) => str.split(delimeter);

const ArrayUtil = {
  strToArray: CoreUtil.isExpected(strToArray, 'string')
};

export default ArrayUtil;

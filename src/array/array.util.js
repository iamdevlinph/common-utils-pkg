import CoreUtil from '../core/core.util';

import strToArray from './utils/strToArray';

const ArrayUtil = {
  strToArray: CoreUtil.takes(strToArray, 'string')
};

export default ArrayUtil;

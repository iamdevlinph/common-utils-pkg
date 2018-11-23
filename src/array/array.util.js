import CoreUtil from '../core/core.util';

import strToArray from './methods/strToArray';

const ArrayUtil = {
  strToArray: CoreUtil.takes(
    strToArray, 'strToArray',
    { 0: 'string', 1: 'string' }
  )
};

export default ArrayUtil;

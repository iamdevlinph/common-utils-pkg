import CoreUtil from '../core/core.util';

import strToArray from './methods/strToArray';

const ArrayUtil = {
  strToArray: CoreUtil.takes(strToArray, 'string')
};

export default ArrayUtil;

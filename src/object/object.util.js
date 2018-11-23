import CoreUtil from '../core/core.util';

import isEmpty from './methods/isEmpty';

const ObjectUtil = {
  isEmpty: CoreUtil.takes(
    isEmpty, 'isEmpty',
    { 0: 'object' }
  )
};

export default ObjectUtil;

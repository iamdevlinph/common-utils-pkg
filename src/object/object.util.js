import CoreUtil from '../core/core.util';

import isEmpty from './methods/isEmpty';

const ObjectUtil = {
  isEmpty: CoreUtil.takes(isEmpty, 'object')
};

export default ObjectUtil;

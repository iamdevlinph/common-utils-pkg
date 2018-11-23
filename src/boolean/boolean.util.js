import CoreUtil from '../core/core.util';

import toBool from './methods/toBool';

const BoolUtil = {
  toBool: CoreUtil.takes(
    toBool, 'toBool',
    { 0: 'any' },
    { 1: 'array' }
  )
};

export default BoolUtil;

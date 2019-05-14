import CoreUtil from '../core/core.util';

import slugify from './methods/slugify';

const SlugUtil = {
  slugify: CoreUtil.takes(
    slugify, 'slugify',
    { 0: 'string' }
  )
};

export default SlugUtil;

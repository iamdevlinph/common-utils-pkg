import CoreUtil from '../core/core.util';

import clearAll from './methods/clearAll';
import getItem from './methods/getItem';
import removeItem from './methods/removeItem';
import setItem from './methods/setItem';

const StorageUtil = {
  clearAll,
  getItem: CoreUtil.takes(getItem, 'string'),
  removeItem: CoreUtil.takes(removeItem, 'string'),
  setItem
};

export default StorageUtil;

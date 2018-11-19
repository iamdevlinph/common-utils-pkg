import CoreUtil from '../core/core.util';

import clear from './methods/clear';
import getItem from './methods/getItem';
import removeItem from './methods/removeItem';
import setItem from './methods/setItem';

const StorageUtil = {
  clear,
  getItem: CoreUtil.takes(getItem, 'string'),
  removeItem: CoreUtil.takes(removeItem, 'string'),
  setItem
};

export default StorageUtil;

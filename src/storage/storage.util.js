import CoreUtil from '../core/core.util';

import clear from './methods/clear';
import getItem from './methods/getItem';
import removeItem from './methods/removeItem';
import setItem from './methods/setItem';

const StorageUtil = {
  clear,
  getItem: CoreUtil.takes(
    getItem,
    { 0: 'string' }
  ),

  removeItem: CoreUtil.takes(
    removeItem,
    { 0: 'string' }
  ),

  setItem: CoreUtil.takes(
    setItem,
    { 0: 'string', 1: 'any' }
  )
};

export default StorageUtil;

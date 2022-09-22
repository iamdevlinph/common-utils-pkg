import 'mock-local-storage';

import { storageClear } from '../storage-clear/storage-clear';
import { storageSet } from '../storage-set/storage-set';
import { storageRemove } from './storage-remove';

global.window = {};
window.localStorage = global.localStorage;

describe('storageRemove', () => {
  beforeAll(() => {
    storageClear();
    storageSet('a', 1);
    storageSet('b', 2);
  });
  it('should remove data from local storage', () => {
    expect(window.localStorage.length).toEqual(2);
    storageRemove('b');
    expect(window.localStorage.length).toEqual(1);
  });
});

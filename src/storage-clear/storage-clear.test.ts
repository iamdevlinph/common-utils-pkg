import 'mock-local-storage';

import { storageSet } from '../storage-set/storage-set';
import { storageClear } from './storage-clear';

// window.localStorage = global.localStorage;

describe.skip('storageClear', () => {
  beforeAll(() => {
    storageClear();
    storageSet('a', 1);
    storageSet('b', 2);
  });
  it('should clear local storage data', () => {
    expect(window.localStorage.length).toEqual(2);
    storageClear();
    expect(window.localStorage.length).toEqual(0);
  });
});

import 'mock-local-storage';

import { storageClear } from '../storage-clear/storage-clear';
import { storageSet } from './storage-set';

global.window = {};
window.localStorage = global.localStorage;

describe('storageSet', () => {
  beforeAll(() => {
    storageClear();
    storageSet('a', 1);
  });
  it('should store data to local storage', () => {
    expect(window.localStorage.length).toEqual(1);
    storageSet('b', 2);
    expect(window.localStorage.length).toEqual(2);
  });
});

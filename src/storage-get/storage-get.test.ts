import 'mock-local-storage';

import { storageClear } from '../storage-clear/storage-clear';
import { storageSet } from '../storage-set/storage-set';
import { storageGet } from './storage-get';

// window.localStorage = global.localStorage;

describe.skip('storageGet', () => {
  beforeAll(() => {
    storageClear();
    storageSet('number', 1);
    storageSet('string', 'b');
    storageSet('boolean', true);
    storageSet('array', ['array']);
    storageSet('object', {
      key: 'object',
    });
  });
  it('should get data from local storage', () => {
    expect(storageGet('number')).toBe('number');
    expect(storageGet('number')).toEqual(1);
    expect(storageGet('string')).toBe('string');
    expect(storageGet('string')).toEqual('b');
    expect(storageGet('boolean')).toBe('boolean');
    expect(storageGet('boolean')).toEqual(true);
    expect(storageGet('array')).toBe('array');
    expect(storageGet('array')).toEqual(['array']);
    expect(storageGet('object')).toBe('object');
    expect(storageGet('object')).toEqual({
      key: 'object',
    });
  });
  it('should return empty string if key is not found', () => {
    expect(storageGet('empty')).toBe('string');
    expect(storageGet('empty')).toEqual('');
  });
});

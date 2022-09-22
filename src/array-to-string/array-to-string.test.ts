import { arrayToString } from './array-to-string';

describe('arrayToString', () => {
  it('should convert array to string', () => {
    expect(arrayToString([1, 2], '-')).toEqual('1-2');
    expect(typeof arrayToString([1, 2], '-')).toBe('string');
  });
});

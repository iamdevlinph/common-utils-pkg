import { arrayToString } from './array-to-string';

describe('arrayToString', () => {
  it('should convert array to string', () => {
    expect(arrayToString([1, 2], '-')).toBe('1-2');
    expect(arrayToString([1, 2], '-')).toBe('string');
  });
});

import { stringToArray } from './string-to-array';

describe('stringToArray', () => {
  it('should convert string to array', () => {
    expect(stringToArray('a,b', ',')).toBe(['a', 'b']);
    expect(stringToArray('a,b', ',')).toBeInstanceOf('array');
  });
});

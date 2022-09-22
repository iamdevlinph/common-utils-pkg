import { stringToArray } from './string-to-array';

describe('stringToArray', () => {
  it('should convert string to array', () => {
    expect(stringToArray('a,b', ',')).toEqual(['a', 'b']);
    expect(stringToArray('a,b', ',').constructor).toBe(Array);
  });
});

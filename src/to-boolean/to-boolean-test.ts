import { toBoolean } from './to-boolean';

describe('toBoolean', () => {
  it('should return Bolean', () => {
    expect(toBoolean(true)).toBe(true);
    expect(toBoolean('true')).toBe(true);
    expect(toBoolean('yes')).toBe(true);
    expect(toBoolean('y')).toBe(true);
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean('1')).toBe(true);

    expect(toBoolean(false)).toBe(false);
    expect(toBoolean('false')).toBe(false);
    expect(toBoolean('no')).toBe(false);
    expect(toBoolean('n')).toBe(false);
    expect(toBoolean(0)).toBe(false);
    expect(toBoolean('0')).toBe(false);

    // user-supplied array of true values
    expect(toBoolean('a', ['a'])).toBe(true);
    expect(toBoolean('b', ['a'])).toBe(false);
    expect(toBoolean('c', ['a', 'b', 'c'])).toBe(true);

    expect(toBoolean(null)).toBe(false);
    expect(toBoolean(undefined)).toBe(false);
  });
});

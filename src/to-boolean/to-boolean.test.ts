import { toBoolean } from './to-boolean';

describe('toBoolean', () => {
  it('should return Bolean', () => {
    expect(toBoolean(true)).toEqual(true);
    expect(toBoolean('true')).toEqual(true);
    expect(toBoolean('yes')).toEqual(true);
    expect(toBoolean('y')).toEqual(true);
    expect(toBoolean(1)).toEqual(true);
    expect(toBoolean('1')).toEqual(true);

    expect(toBoolean(false)).toEqual(false);
    expect(toBoolean('false')).toEqual(false);
    expect(toBoolean('no')).toEqual(false);
    expect(toBoolean('n')).toEqual(false);
    expect(toBoolean(0)).toEqual(false);
    expect(toBoolean('0')).toEqual(false);

    // user-supplied array of true values
    expect(toBoolean('a', ['a'])).toEqual(true);
    expect(toBoolean('b', ['a'])).toEqual(false);
    expect(toBoolean('c', ['a', 'b', 'c'])).toEqual(true);

    expect(toBoolean(null)).toEqual(false);
    expect(toBoolean(undefined)).toEqual(false);
  });
});

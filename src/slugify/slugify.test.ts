import { slugify } from './slugify';

describe('slugify', () => {
  it('should return a slug version of a string', () => {
    expect(slugify('The quick brown fox')).toBe('the-quick-brown-fox');
    expect(slugify('A. more-Complicated string!..')).toBe(
      'a-more-complicated-string'
    );
    expect(slugify('wïth speciäl chærs')).toBe('with-special-chars');
  });
});

import { slugify } from './slugify';

describe('slugify', () => {
  it('should return a slug version of a string', () => {
    expect(slugify('The quick brown fox')).toEqual('the-quick-brown-fox');
    expect(slugify('A. more-Complicated string!..')).toEqual(
      'a-more-complicated-string'
    );
    expect(slugify('wïth speciäl chærs')).toEqual('with-special-chars');
  });
});

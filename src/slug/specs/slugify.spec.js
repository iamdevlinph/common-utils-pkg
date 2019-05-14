/* global describe, it */

import chai from 'chai';
import SlugUtil from '../slug.util';

chai.expect();

const { expect } = chai;

describe('slugify', () => {
  it('should throw an error if there is no value passed', () => {
    expect(() => {
      SlugUtil.slugify();
    }).to.throw(Error);
  });
  it('should return a slug version of a string', () => {
    expect(SlugUtil.slugify('The quick brown fox')).to.be.equal('the-quick-brown-fox');
    expect(SlugUtil.slugify('A. more-Complicated string!..')).to.be.equal('a-more-complicated-string');
    expect(SlugUtil.slugify('wïth speciäl chærs')).to.be.equal('with-special-chars');
  });
});

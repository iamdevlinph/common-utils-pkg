import chai from 'chai';
import slugify from './slugify';

chai.expect();

const { expect } = chai;

describe('slugify', () => {
  it('should throw an error if there is no value passed', () => {
    expect(() => {
      slugify();
    }).to.throw(Error);
  });
  it('should return a slug version of a string', () => {
    expect(slugify('The quick brown fox')).to.be.equal('the-quick-brown-fox');
    expect(slugify('A. more-Complicated string!..')).to.be.equal('a-more-complicated-string');
    expect(slugify('wïth speciäl chærs')).to.be.equal('with-special-chars');
  });
});

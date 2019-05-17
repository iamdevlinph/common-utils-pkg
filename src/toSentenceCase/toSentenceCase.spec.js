import chai from 'chai';
import toSentenceCase from './toSentenceCase';

chai.expect();

const { expect } = chai;

describe('toSentenceCase', () => {
  it('should throw an error if the value passed is not a string', () => {
    expect(() => {
      toSentenceCase(123);
    }).to.throw(Error);
  });

  it('should convert string to "Sentence case"', () => {
    expect(toSentenceCase('THE QUICK BROWN')).to.be.equal('The quick brown');
  });
});

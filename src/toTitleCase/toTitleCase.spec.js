import chai from 'chai';
import toTitleCase from './toTitleCase';

chai.expect();

const { expect } = chai;

describe('toTitleCase', () => {
  it('should throw an error if the value pased is not a string', () => {
    expect(() => {
      toTitleCase(123);
    }).to.throw(Error);
  });

  it('should convert string to "Title Case"', () => {
    expect(toTitleCase('the quick brown')).to.be.equal('The Quick Brown');
  });
});

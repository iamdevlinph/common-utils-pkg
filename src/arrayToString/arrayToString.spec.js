import chai from 'chai';
import arrayToString from './arrayToString';

chai.expect();

const { expect } = chai;

describe('arrayToString', () => {
  it('should throw an error if the value passed is not a string', () => {
    expect(() => {
      arrayToString(1);
    }).to.throw(Error);
  });

  it('should convert array to string', () => {
    expect(arrayToString([1, 2], '-')).to.be.equal('1-2');
    expect(arrayToString([1, 2], '-')).to.be.a('string');
  });
});

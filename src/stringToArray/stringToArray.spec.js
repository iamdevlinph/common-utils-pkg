import chai from 'chai';
import stringToArray from './stringToArray';

chai.expect();

const { expect } = chai;

describe('stringToArray', () => {
  it('should throw an error if the value passed is not a string', () => {
    expect(() => {
      stringToArray(1, ',');
    }).to.throw(Error);
  });

  it('should convert string to array', () => {
    expect(stringToArray('a,b', ',')).to.deep.equal(['a', 'b']);
    expect(stringToArray('a,b', ',')).to.be.an('array');
  });
});

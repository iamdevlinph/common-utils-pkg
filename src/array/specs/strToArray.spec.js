/* global describe, it */

import chai from 'chai';
import ArrayUtil from '../array.util';

chai.expect();

const { expect } = chai;

describe('strToArray', () => {
  it('should throw an error if the value passed is not a string', () => {
    expect(() => {
      ArrayUtil.strToArray(1, ',');
    }).to.throw(Error);
  });

  it('should convert string to array', () => {
    expect(ArrayUtil.strToArray('a,b', ',')).to.deep.equal(['a', 'b']);
    expect(ArrayUtil.strToArray('a,b', ',')).to.be.an('array');
  });
});

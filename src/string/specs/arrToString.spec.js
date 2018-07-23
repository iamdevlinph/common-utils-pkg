/* global describe, it */

import chai from 'chai';
import StringUtil from '../string.util';

chai.expect();

const { expect } = chai;

describe('arrToString', () => {
  it('should throw an error if the value passed is not a string', () => {
    expect(() => {
      StringUtil.arrToString(1);
    }).to.throw(Error);
  });

  it('should convert array to string', () => {
    expect(StringUtil.arrToString([1, 2], '-')).to.be.equal('1-2');
    expect(StringUtil.arrToString([1, 2], '-')).to.be.a('string');
  });
});

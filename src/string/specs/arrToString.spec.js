/* global describe, it */

import chai from 'chai';
import arrToString from '../utils/arrToString';

chai.expect();

const { expect } = chai;

describe('arrToString', () => {
  it('should convert array to string', () => {
    expect(arrToString([1, 2], '-')).to.be.equal('1-2');
    expect(arrToString([1, 2], '-')).to.be.a('string');
  });
});

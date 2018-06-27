/* global describe, it */

import chai from 'chai';
import ArrayUtil from './array.util';

chai.expect();

const {
  expect
} = chai;

describe('ARRAY', () => {
  describe('when i run test', () => {
    it('should "Array OK"', () => {
      expect(ArrayUtil.test()).to.be.equal('Array OK');
    });
  });

  describe('toString', () => {
    it('should convert array to string', () => {
      expect(ArrayUtil.toString([1, 2], '-')).to.be.equal('1-2');
    });
  });
});

/* global describe, it */

import chai from 'chai';
import StringUtil from './string.util';

chai.expect();

const {
  expect
} = chai;

describe('STRING', () => {
  describe('when i run test', () => {
    it('should "String OK"', () => {
      expect(StringUtil.test()).to.be.equal('String OK');
    });
  });

  describe('toString', () => {
    it('should convert array to string', () => {
      expect(StringUtil.toString([1, 2], '-')).to.be.equal('1-2');
      expect(StringUtil.toString([1, 2], '-')).to.be.a('string');
    });
  });
});

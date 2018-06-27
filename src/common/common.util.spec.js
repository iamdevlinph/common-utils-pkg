/* global describe, it */

import chai from 'chai';
import CommonUtil from './common.util';

chai.expect();

const {
  expect
} = chai;

describe('COMMON', () => {
  describe('when i run test', () => {
    it('should "Common OK"', () => {
      expect(CommonUtil.test()).to.be.equal('Common OK');
    });
  });

  describe('isNull', () => {
    it('should throw an error if value is null or undefined', () => {
      expect(CommonUtil.isNull(null)).to.throw(new Error('invalid value passed: null'));
    });
  });
});

/* global describe, it */

import chai from 'chai';
import CoreUtil from './core.util';

chai.expect();

const {
  expect
} = chai;

describe('CORE', () => {
  describe('when i run test', () => {
    it('should "Core OK"', () => {
      expect(CoreUtil.test()).to.be.equal('Core OK');
    });
  });

  describe('isNull', () => {
    it('should return true if value is null or undefined', () => {
      expect(CoreUtil.isNull(undefined, 'utilName')).to.be.equal(true);
      expect(CoreUtil.isNull('valid', 'utilName')).to.be.equal(false);
    });
  });

  describe('isExpected', () => {
    it('should return true if the value is the expected type', () => {
      expect(CoreUtil.isExpected(1, 'string')).to.be.equal(false);
      expect(CoreUtil.isExpected('not number', 'number')).to.be.equal(false);
      expect(CoreUtil.isExpected(1, 'number')).to.be.equal(true);
      expect(CoreUtil.isExpected('string', 'string')).to.be.equal(true);
      expect(CoreUtil.isExpected(null, 'string')).to.be.equal(false);
      expect(CoreUtil.isExpected(null, 'number')).to.be.equal(false);
    });
  });
});

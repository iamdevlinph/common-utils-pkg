/* global describe, it */

import chai from 'chai';
import BooleanUtil from './boolean.util';

chai.expect();

const {
  expect
} = chai;

describe('BOOLEAN', () => {
  describe('when i run test', () => {
    it('should "Boolean OK"', () => {
      expect(BooleanUtil.test()).to.be.equal('Boolean OK');
    });
  });

  describe('toBool', () => {
    it('should return Bolean', () => {
      expect(BooleanUtil.toBool(true)).to.be.equal(true);
      expect(BooleanUtil.toBool('true')).to.be.equal(true);
      expect(BooleanUtil.toBool('yes')).to.be.equal(true);
      expect(BooleanUtil.toBool('y')).to.be.equal(true);
      expect(BooleanUtil.toBool(1)).to.be.equal(true);
      expect(BooleanUtil.toBool('1')).to.be.equal(true);

      expect(BooleanUtil.toBool(false)).to.be.equal(false);
      expect(BooleanUtil.toBool('false')).to.be.equal(false);
      expect(BooleanUtil.toBool('no')).to.be.equal(false);
      expect(BooleanUtil.toBool('n')).to.be.equal(false);
      expect(BooleanUtil.toBool(0)).to.be.equal(false);
      expect(BooleanUtil.toBool('0')).to.be.equal(false);
    });
  });
});

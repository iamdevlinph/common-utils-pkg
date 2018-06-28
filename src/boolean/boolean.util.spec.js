/* global describe, it */

import chai from 'chai';
import BoolUtil from './boolean.util';

chai.expect();

const {
  expect
} = chai;

describe('BOOLEAN', () => {
  describe('when i run test', () => {
    it('should "Boolean OK"', () => {
      expect(BoolUtil.test()).to.be.equal('Boolean OK');
    });
  });

  describe('toBool', () => {
    it('should return Bolean', () => {
      expect(BoolUtil.toBool(true)).to.be.equal(true);
      expect(BoolUtil.toBool('true')).to.be.equal(true);
      expect(BoolUtil.toBool('yes')).to.be.equal(true);
      expect(BoolUtil.toBool('y')).to.be.equal(true);
      expect(BoolUtil.toBool(1)).to.be.equal(true);
      expect(BoolUtil.toBool('1')).to.be.equal(true);

      expect(BoolUtil.toBool(false)).to.be.equal(false);
      expect(BoolUtil.toBool('false')).to.be.equal(false);
      expect(BoolUtil.toBool('no')).to.be.equal(false);
      expect(BoolUtil.toBool('n')).to.be.equal(false);
      expect(BoolUtil.toBool(0)).to.be.equal(false);
      expect(BoolUtil.toBool('0')).to.be.equal(false);
    });
    it('should return an error if the value cannot be parsed to boolean', () => {
      expect(BoolUtil.toBool(null)).to.be.an('error');
    });
  });
});

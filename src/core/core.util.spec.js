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
    it('return true if value is null or undefined', () => {
      expect(CoreUtil.isNull(undefined, 'utilName')).to.be.equal(true);
    });
  });
});

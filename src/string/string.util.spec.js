/* global describe, it */

import chai from 'chai';
import StringUtil from './string.util';

chai.expect();

const { expect } = chai;

describe('STRING', () => {
  describe('when i run test', () => {
    it('should "String OK"', () => {
      expect(StringUtil.test()).to.be.equal('String OK');
    });
  });
});

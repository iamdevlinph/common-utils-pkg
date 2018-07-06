/* global describe, it */

import chai from 'chai';
import DateUtil from './date.util';

chai.expect();

const { expect } = chai;

describe('DATE', () => {
  describe('when i run test', () => {
    it('should "Date OK"', () => {
      expect(DateUtil.test()).to.be.equal('Date OK');
    });
  });
});

/* global describe, it */

import chai from 'chai';
import FileUtil from './file.util';

chai.expect();

const { expect } = chai;

describe('FILE', () => {
  describe('when i run test', () => {
    it('should "File OK"', () => {
      expect(FileUtil.test()).to.be.equal('File OK');
    });
  });
});

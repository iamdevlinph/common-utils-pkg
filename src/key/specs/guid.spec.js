/* global describe, it */

import chai from 'chai';
import KeyUtil from '../key.util';

chai.expect();

const { expect } = chai;

describe('guid', () => {
  it('should generate a guid', () => {
    expect(KeyUtil.guid()).to.be.a('string');
  });
});

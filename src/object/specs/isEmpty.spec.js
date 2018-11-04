/* global describe, it */

import chai from 'chai';
import ObjectUtil from '../object.util';

chai.expect();

const { expect } = chai;

describe('isEmpty', () => {
  it('should return true if the object is empty', () => {
    expect(ObjectUtil.isEmpty({})).to.be.equal(true);
  });

  it('should return false if the object is empty', () => {
    expect(ObjectUtil.isEmpty({ a: 1 })).to.be.equal(false);
  });

  it('should throw an error if the param is not an object', () => {
    expect(() => {
      ObjectUtil.isEmpty([]);
    }).to.throw(Error);
    expect(() => {
      ObjectUtil.isEmpty(1);
    }).to.throw(Error);
    expect(() => {
      ObjectUtil.isEmpty('1');
    }).to.throw(Error);
    expect(() => {
      ObjectUtil.isEmpty(null);
    }).to.throw(Error);
    expect(() => {
      ObjectUtil.isEmpty(undefined);
    }).to.throw(Error);
  });
});

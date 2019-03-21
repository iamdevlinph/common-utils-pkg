/* global describe, it, before */

import 'mock-local-storage';
import chai from 'chai';
import StorageUtil from '../storage.util';

global.window = {};
window.localStorage = global.localStorage;

chai.expect();

const {
  expect
} = chai;

describe('getItem', () => {
  before(() => {
    StorageUtil.clear();
    StorageUtil.setItem('number', 1);
    StorageUtil.setItem('string', 'b');
    StorageUtil.setItem('boolean', true);
    StorageUtil.setItem('array', ['array']);
    StorageUtil.setItem('object', {
      key: 'object'
    });
  });
  it('should get data from local storage', () => {
    expect(StorageUtil.getItem('number')).to.be.a('number').and.to.be.equal(1);
    expect(StorageUtil.getItem('string')).to.be.a('string').and.to.be.equal('b');
    expect(StorageUtil.getItem('boolean')).to.be.a('boolean').and.to.be.equal(true);
    expect(StorageUtil.getItem('array')).to.be.an('array').and.to.eql(['array']);
    expect(StorageUtil.getItem('object')).to.be.an('object').and.to.eql({
      key: 'object'
    });
  });
  it('should return empty string if key is not found', () => {
    expect(StorageUtil.getItem('empty')).to.be.a('string').and.to.be.equal('');
  });
});

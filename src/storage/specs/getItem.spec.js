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
    StorageUtil.setItem('a', 1);
    StorageUtil.setItem('b', 2);
  });
  it('should get data from local storage', () => {
    expect(StorageUtil.getItem('a')).to.be.equal(1);
    expect(StorageUtil.getItem('b')).to.be.equal(2);
  });
});

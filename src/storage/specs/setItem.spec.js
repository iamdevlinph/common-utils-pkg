/* global describe, it, before */

import 'mock-local-storage';
import chai from 'chai';
import StorageUtil from '../storage.util';

global.window = {};
window.localStorage = global.localStorage;

chai.expect();

const { expect } = chai;

describe('setItem', () => {
  before(() => {
    StorageUtil.clear();
    StorageUtil.setItem('a', 1);
  });
  it('should store data to local storage', () => {
    expect(window.localStorage.length).to.be.equal(1);
    StorageUtil.setItem('b', 2);
    expect(window.localStorage.length).to.be.equal(2);
  });
});

/* global describe, it, before */

import 'mock-local-storage';
import chai from 'chai';
import StorageUtil from '../storage.util';

global.window = {};
window.localStorage = global.localStorage;

chai.expect();

const { expect } = chai;

describe('clear', () => {
  before(() => {
    StorageUtil.clear();
    StorageUtil.setItem('a', 1);
    StorageUtil.setItem('b', 2);
  });
  it('should clear local storage data', () => {
    expect(window.localStorage.length).to.be.equal(2);
    StorageUtil.clear();
    expect(window.localStorage.length).to.be.equal(0);
  });
});

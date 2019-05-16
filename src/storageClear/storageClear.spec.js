import 'mock-local-storage';
import chai from 'chai';
import storageClear from './storageClear';
import storageSet from '../storageSet/storageSet';


global.window = {};
window.localStorage = global.localStorage;

chai.expect();

const { expect } = chai;

describe('storageClear', () => {
  before(() => {
    storageClear();
    storageSet('a', 1);
    storageSet('b', 2);
  });
  it('should clear local storage data', () => {
    expect(window.localStorage.length).to.be.equal(2);
    storageClear();
    expect(window.localStorage.length).to.be.equal(0);
  });
});

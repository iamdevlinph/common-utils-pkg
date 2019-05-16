import 'mock-local-storage';
import chai from 'chai';
import storageSet from './storageSet';
import storageClear from '../storageClear/storageClear';

global.window = {};
window.localStorage = global.localStorage;

chai.expect();

const { expect } = chai;

describe('storageSet', () => {
  before(() => {
    storageClear();
    storageSet('a', 1);
  });
  it('should store data to local storage', () => {
    expect(window.localStorage.length).to.be.equal(1);
    storageSet('b', 2);
    expect(window.localStorage.length).to.be.equal(2);
  });
});

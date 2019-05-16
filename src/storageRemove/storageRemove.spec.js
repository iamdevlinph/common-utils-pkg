import 'mock-local-storage';
import chai from 'chai';
import storageRemove from './storageRemove';
import storageClear from '../storageClear/storageClear';
import storageSet from '../storageSet/storageSet';

global.window = {};
window.localStorage = global.localStorage;

chai.expect();

const { expect } = chai;

describe('storageRemove', () => {
  before(() => {
    storageClear();
    storageSet('a', 1);
    storageSet('b', 2);
  });
  it('should remove data from local storage', () => {
    expect(window.localStorage.length).to.be.equal(2);
    storageRemove('b');
    expect(window.localStorage.length).to.be.equal(1);
  });
});

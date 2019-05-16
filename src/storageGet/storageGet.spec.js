import 'mock-local-storage';
import chai from 'chai';
import storageGet from './storageGet';
import storageClear from '../storageClear/storageClear';
import storageSet from '../storageSet/storageSet';

global.window = {};
window.localStorage = global.localStorage;

chai.expect();

const {
  expect
} = chai;

describe('storageGet', () => {
  before(() => {
    storageClear();
    storageSet('number', 1);
    storageSet('string', 'b');
    storageSet('boolean', true);
    storageSet('array', ['array']);
    storageSet('object', {
      key: 'object'
    });
  });
  it('should get data from local storage', () => {
    expect(storageGet('number')).to.be.a('number').and.to.be.equal(1);
    expect(storageGet('string')).to.be.a('string').and.to.be.equal('b');
    expect(storageGet('boolean')).to.be.a('boolean').and.to.be.equal(true);
    expect(storageGet('array')).to.be.an('array').and.to.eql(['array']);
    expect(storageGet('object')).to.be.an('object').and.to.eql({
      key: 'object'
    });
  });
  it('should return empty string if key is not found', () => {
    expect(storageGet('empty')).to.be.a('string').and.to.be.equal('');
  });
});

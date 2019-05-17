import chai from 'chai';
import toBoolean from './toBoolean';

chai.expect();

const { expect } = chai;

describe('toBoolean', () => {
  it('should return Bolean', () => {
    expect(toBoolean(true)).to.be.equal(true);
    expect(toBoolean('true')).to.be.equal(true);
    expect(toBoolean('yes')).to.be.equal(true);
    expect(toBoolean('y')).to.be.equal(true);
    expect(toBoolean(1)).to.be.equal(true);
    expect(toBoolean('1')).to.be.equal(true);

    expect(toBoolean(false)).to.be.equal(false);
    expect(toBoolean('false')).to.be.equal(false);
    expect(toBoolean('no')).to.be.equal(false);
    expect(toBoolean('n')).to.be.equal(false);
    expect(toBoolean(0)).to.be.equal(false);
    expect(toBoolean('0')).to.be.equal(false);

    // user-supplied array of true values
    expect(toBoolean('a', ['a'])).to.be.equal(true);
    expect(toBoolean('b', ['a'])).to.be.equal(false);
    expect(toBoolean('c', ['a', 'b', 'c'])).to.be.equal(true);

    expect(toBoolean(null)).to.be.equal(false);
    expect(toBoolean(undefined)).to.be.equal(false);
  });
});

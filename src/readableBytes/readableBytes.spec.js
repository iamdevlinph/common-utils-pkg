import chai from 'chai';
import readableBytes from './readableBytes';

chai.expect();

const { expect } = chai;

describe('readableBytes', () => {
  it('should throw an error if the value passed is not a number', () => {
    expect(() => {
      readableBytes('123');
    }).to.throw(Error);
  });

  it('should convert bytes to readable format', () => {
    expect(readableBytes(1)).to.be.equal('1 byte(s)');
    expect(readableBytes(1024)).to.be.equal('1 kB');
    expect(readableBytes(1234)).to.be.equal('1.205078125 kB');
    expect(readableBytes(1234, 2)).to.be.equal('1.21 kB');
    expect(readableBytes(1234, 3)).to.be.equal('1.205 kB');
    expect(readableBytes(1048576)).to.be.equal('1 MB');
    expect(readableBytes(1073741824)).to.be.equal('1 GB');
    expect(readableBytes(1099511627776)).to.be.equal('1 TB');
    expect(readableBytes(1125899906842624)).to.be.equal('1 PB');
  });
});

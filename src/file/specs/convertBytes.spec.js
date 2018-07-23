/* global describe, it */

import chai from 'chai';
import FileUtil from '../file.util';

chai.expect();

const { expect } = chai;

describe('convertBytes', () => {
  it('should throw an error if the value passed is not a number', () => {
    expect(() => {
      FileUtil.convertBytes('123');
    }).to.throw(Error);
  });

  it('should convert bytes to readable format', () => {
    expect(FileUtil.convertBytes(1)).to.be.equal('1 byte(s)');
    expect(FileUtil.convertBytes(1024)).to.be.equal('1 kB');
    expect(FileUtil.convertBytes(1234)).to.be.equal('1.205078125 kB');
    expect(FileUtil.convertBytes(1234, 2)).to.be.equal('1.21 kB');
    expect(FileUtil.convertBytes(1234, 3)).to.be.equal('1.205 kB');
    expect(FileUtil.convertBytes(1048576)).to.be.equal('1 MB');
    expect(FileUtil.convertBytes(1073741824)).to.be.equal('1 GB');
    expect(FileUtil.convertBytes(1099511627776)).to.be.equal('1 TB');
    expect(FileUtil.convertBytes(1125899906842624)).to.be.equal('1 PB');
  });
});

import { readableBytes } from './readable-bytes';

describe('readableBytes', () => {
  it('should convert bytes to readable format', () => {
    expect(readableBytes(1)).toEqual('1 byte(s)');
    expect(readableBytes(1024)).toEqual('1 kB');
    expect(readableBytes(1234)).toEqual('1.205078125 kB');
    expect(readableBytes(1234, 2)).toEqual('1.21 kB');
    expect(readableBytes(1234, 3)).toEqual('1.205 kB');
    expect(readableBytes(1048576)).toEqual('1 MB');
    expect(readableBytes(1073741824)).toEqual('1 GB');
    expect(readableBytes(1099511627776)).toEqual('1 TB');
    expect(readableBytes(1125899906842624)).toEqual('1 PB');
  });
});

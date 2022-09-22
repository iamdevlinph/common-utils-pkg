import { readableBytes } from './readable-bytes';

describe('readableBytes', () => {
  it('should convert bytes to readable format', () => {
    expect(readableBytes(1)).toBe('1 byte(s)');
    expect(readableBytes(1024)).toBe('1 kB');
    expect(readableBytes(1234)).toBe('1.205078125 kB');
    expect(readableBytes(1234, 2)).toBe('1.21 kB');
    expect(readableBytes(1234, 3)).toBe('1.205 kB');
    expect(readableBytes(1048576)).toBe('1 MB');
    expect(readableBytes(1073741824)).toBe('1 GB');
    expect(readableBytes(1099511627776)).toBe('1 TB');
    expect(readableBytes(1125899906842624)).toBe('1 PB');
  });
});

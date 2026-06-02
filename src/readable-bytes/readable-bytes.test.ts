import { readableBytes } from './readable-bytes';

describe('readableBytes', () => {
  it('should convert bytes to readable format with default options', () => {
    expect(readableBytes(1)).toEqual('1 byte(s)');
    expect(readableBytes(1024)).toEqual('1 kB');
    expect(readableBytes(1234)).toEqual('1.205078125 kB');
    expect(readableBytes(1048576)).toEqual('1 MB');
    expect(readableBytes(1073741824)).toEqual('1 GB');
    expect(readableBytes(1099511627776)).toEqual('1 TB');
    expect(readableBytes(1125899906842624)).toEqual('1 PB');
  });

  it('should support an empty options object', () => {
    expect(readableBytes(1234, {})).toEqual('1.205078125 kB');
  });

  it('should apply decimals when provided', () => {
    expect(readableBytes(1234, { decimals: 2 })).toEqual('1.21 kB');
    expect(readableBytes(1234, { decimals: 3 })).toEqual('1.205 kB');
  });

  it('should apply minUnit when provided', () => {
    expect(readableBytes(500, { minUnit: 'kB' })).toEqual('0.48828125 kB');

    expect(readableBytes(1234, { minUnit: 'MB' })).toEqual(
      '0.0011768341064453125 MB'
    );

    expect(readableBytes(1048576, { minUnit: 'MB' })).toEqual('1 MB');
  });

  it('should apply decimals and minUnit together', () => {
    expect(
      readableBytes(1234, {
        decimals: 3,
        minUnit: 'MB',
      })
    ).toEqual('0.001 MB');

    expect(
      readableBytes(500, {
        decimals: 2,
        minUnit: 'kB',
      })
    ).toEqual('0.49 kB');
  });
});

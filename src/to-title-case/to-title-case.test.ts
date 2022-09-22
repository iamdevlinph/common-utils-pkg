/* ignore file */

import { toTitleCase } from './to-title-case';

describe('toTitleCase', () => {
  it('should convert string to "Title Case"', () => {
    expect(toTitleCase('the quick brown')).toEqual('The Quick Brown');
  });
});

import { toSentenceCase } from './to-sentence-case';

describe('toSentenceCase', () => {
  it('should convert string to "Sentence case"', () => {
    expect(toSentenceCase('THE QUICK BROWN')).toEqual('The quick brown');
  });
});

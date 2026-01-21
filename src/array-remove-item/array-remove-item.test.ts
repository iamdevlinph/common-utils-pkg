import { arrayRemoveItem } from './array-remove-item';

describe('arrayRemoveItem', () => {
  it('should remove provided string from the array of strings', () => {
    expect(arrayRemoveItem(['apple', 'banana', 'cherry'], 'apple')).toEqual([
      'banana',
      'cherry',
    ]);
  });

  it('should remove provided number from the array of numbers', () => {
    expect(arrayRemoveItem([2, 4, 1], 4)).toEqual([2, 1]);
  });
});

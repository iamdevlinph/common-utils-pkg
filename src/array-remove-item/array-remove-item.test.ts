import { arrayRemoveItem } from './array-remove-item';

describe('arrayRemoveItem', () => {
  it('should remove provided element from the array', () => {
    expect(arrayRemoveItem(['apple', 'banana', 'cherry'], 'apple')).toEqual([
      'banana',
      'cherry',
    ]);
  });
});

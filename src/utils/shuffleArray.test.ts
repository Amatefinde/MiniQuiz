import shuffleArray from './shuffleArray'

describe('shuffleArray', () => {
  test('should return an array of the same length', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const shuffledArray = shuffleArray([...array]);

    expect(shuffledArray).toHaveLength(array.length);
  });

  test('should return an array with the same elements', () => {
    const array = ['a', 'b', 'c', 'd', 'e'];
    const shuffledArray = shuffleArray([...array]);

    expect(shuffledArray).toEqual(expect.arrayContaining(array));
    expect(array).toEqual(expect.arrayContaining(shuffledArray));
  });


  test('should handle an empty array', () => {
    const array: string[] = [];
    const shuffledArray = shuffleArray(array);

    expect(shuffledArray).toEqual([]);
  });

  test('should handle an array with one element', () => {
    const array = ['a'];
    const shuffledArray = shuffleArray(array);

    expect(shuffledArray).toEqual(['a']);
  });
});

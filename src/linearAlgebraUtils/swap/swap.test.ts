import swap from './swap';

it('Swap swaps rows of matricies', () => {
  const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const expected = [
    [4, 5, 6],
    [1, 2, 3],
    [7, 8, 9]
  ];
  expect(swap(A, 0, 1)).toStrictEqual(expected);
});

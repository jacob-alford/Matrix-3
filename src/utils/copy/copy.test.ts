import copy from './copy';

it('copies matrix without mutating original', () => {
  const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const a = copy(A);
  a[0][0] = 5;
  expect(A[0][0]).toBe(1);
});

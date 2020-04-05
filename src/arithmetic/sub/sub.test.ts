import sub from './sub';

it('subtracts two matricies or vectors', async () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const b = [
    [6, 9, 6],
    [4, 2, 0],
    [9, 6, 9]
  ];
  const c = [4, 2, 0];
  const d = [6, 9, 6];

  expect(await sub(a, b)).toStrictEqual([
    [-5, -7, -3],
    [0, 3, 6],
    [-2, 2, 0]
  ]);
  expect(await sub(c, d)).toStrictEqual([-2, -7, -6]);
  await expect(sub(a, c)).rejects.toThrow('Sub() requires two items of the same type!');
});

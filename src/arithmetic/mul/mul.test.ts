import mul from './mul';

it('multiplies two matricies or vectors', async () => {
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

  expect(await mul(a, b)).toStrictEqual([
    [6, 18, 18],
    [16, 10, 0],
    [63, 48, 81]
  ]);
  expect(await mul(c, d)).toStrictEqual([24, 18, 0]);
  await expect(mul(a, c)).rejects.toThrow('Mul() requires two items of the same type!');
});

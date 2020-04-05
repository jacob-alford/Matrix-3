import div from './div';

it('divides two matricies or vectors', async () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const b = [
    [6, 10, 6],
    [4, 15, 0],
    [35, 48, 9]
  ];
  const c = [4, 2, 0];
  const d = [16, 200, 6];

  expect(await div(b, a)).toStrictEqual([
    [6, 5, 2],
    [1, 3, 0],
    [5, 6, 1]
  ]);
  expect(await div(d, c)).toStrictEqual([4, 100, Infinity]);
  await expect(div(a, c)).rejects.toThrow('Div() requires two items of the same type!');
});

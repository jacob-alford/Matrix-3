import add from "./add";

it("adds two matricies or vectors", async () => {
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

  expect(await add(a, b)).toStrictEqual([
    [7, 11, 9],
    [8, 7, 6],
    [16, 14, 18]
  ]);
  expect(await add(c, d)).toStrictEqual([10, 11, 6]);
  await expect(add(a, c)).rejects.toThrow(
    "Add() requires two items of the same type!"
  );
});

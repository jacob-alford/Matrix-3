import shape from "./shape";

it("determines the shape of a vector or matrix", () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const b = [1, 2, 3];
  expect(shape(a)).toStrictEqual([3, 3]);
  expect(shape(b)).toStrictEqual([1, 3]);
});

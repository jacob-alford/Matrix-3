import isSquare from "./isSquare";

it("determines if a matrix is square", () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const b = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  expect(isSquare(a)).toBe(true);
  expect(isSquare(b)).toBe(false);
});

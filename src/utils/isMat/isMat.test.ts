import isMat from "./isMat";

it("determines if a structure is a matrix", () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const b = [1, 2, 3];
  expect(isMat(a)).toBe(true);
  expect(isMat(b)).toBe(false);
});

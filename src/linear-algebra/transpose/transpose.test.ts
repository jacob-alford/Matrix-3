import transpose from "./transpose";

it("transposes a matrix", () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const b = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ];
  expect(transpose(a)).toStrictEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
  ]);
  expect(transpose(b)).toStrictEqual([
    [1, 3, 5, 7],
    [2, 4, 6, 8]
  ]);
});

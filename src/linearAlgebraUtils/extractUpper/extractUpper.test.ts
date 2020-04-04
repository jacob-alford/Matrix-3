import extractUpper from "./extractUpper";

describe("extractUpper functionsProperly", () => {
  it("extracts the upper part of a matrix", () => {
    const A = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(extractUpper(A)).toStrictEqual([
      [1, 2, 3, 4],
      [0, 6, 7, 8],
      [0, 0, 11, 12],
      [0, 0, 0, 16],
    ]);
  });
});

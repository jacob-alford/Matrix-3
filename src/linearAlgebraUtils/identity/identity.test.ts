import identity from "./identity";

describe("identity functions properly", () => {
  it("makes an identity matrix", () => {
    expect(identity(3)).toStrictEqual([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);
  });
});

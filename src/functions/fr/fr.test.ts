import fr from "./fr";

it("gets values from vector or matrix", () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const b = [1, 2, 3];
  expect(fr(a)(0)(0)).toBe(1);
  expect(fr(a)(0)()).toStrictEqual([1, 2, 3]);
  expect(fr(a)()(2)).toStrictEqual([3, 6, 9]);
  expect(fr(a)()()).toBe(a);
  expect(fr(b)(0)()).toBe(1);
  expect(fr(b)()()).toBe(b);
});

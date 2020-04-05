import isVec from './isVec';

it('determines if a structure is a vector', () => {
  const a = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  const b = [1, 2, 3];
  expect(isVec(a)).toBe(false);
  expect(isVec(b)).toBe(true);
});

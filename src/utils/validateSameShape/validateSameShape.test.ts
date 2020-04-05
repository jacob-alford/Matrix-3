import validateSameShape from './validateSameShape';

it('validates similar shaped matricies', () => {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  const c = [7, 8, 9, 0];
  const d = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  const e = [
    [4, 5, 6],
    [7, 8, 9]
  ];
  const f = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  expect(validateSameShape(a, b)).toBeUndefined();
  expect(() => validateSameShape(a, c)).toThrowError(
    'Supplied arguments do not match in shape!'
  );
  expect(() => validateSameShape(a, d)).toThrowError(
    'Supplied arguments are of different types!'
  );
  expect(validateSameShape(d, e)).toBeUndefined();
  expect(() => validateSameShape(e, f)).toThrowError(
    'Supplied arguments do not match in shape!'
  );
});

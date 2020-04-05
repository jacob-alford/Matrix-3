import reduceFrom from './reduceFrom';

it('reduces for a specific range', () => {
  const callback = jest.fn();
  const A = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  reduceFrom(A, 4, 7, callback, undefined);
  expect(callback).toHaveBeenNthCalledWith(1, undefined, '4', 4, A);
  expect(callback).toHaveBeenNthCalledWith(2, undefined, '5', 5, A);
  expect(callback).toHaveBeenNthCalledWith(3, undefined, '6', 6, A);
});

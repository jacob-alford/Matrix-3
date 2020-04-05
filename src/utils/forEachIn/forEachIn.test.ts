import forEachIn from './forEachIn';

it('forEachIn iterates over every element in an array', () => {
  const A = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const callback = jest.fn();
  forEachIn(A, callback);
  expect(callback).toHaveBeenCalledTimes(9);
});

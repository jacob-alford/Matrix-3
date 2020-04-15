import { M } from './M';

describe('M() functions properly', () => {
  it('parses a matrix string without parameters', () => {
    expect(M(`1 2 3;4 5 6;7 8 9`)).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });
  it('parses a matrix with special parameters', () => {
    expect(
      M('1,2,3\n4,5,6\n7,8,9', { newRowDelimiter: '\n', newColDelimiter: ',' })
    ).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });
  it('throws if invalid characters are supplied', () => {
    expect(() => M('1 2 3;a b c;7 8 9')).toThrow(`Item 'a' is not a number!`);
  });
  it('parses and validates a regular matrix', () => {
    expect(
      M([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ])
    ).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });
  it('shapes a vector from config', () => {
    expect(M([1, 2, 3, 4, 5, 6, 7, 8, 9], { shape: [3, 3] })).toStrictEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]);
  });
  it('throws if a vector is supplied without a shape', () => {
    expect(() => M([1, 2, 3, 4, 5, 6, 7, 8, 9])).toThrow(
      'options.shape is required to construct a matrix from a vector!'
    );
  });
  it('throws if produced matrix is a vector', () => {
    expect(() => M([1, 2, 3, 4, 5, 6, 7, 8, 9], { shape: [1, 9] })).toThrow(
      'options.shape: [1,9] would produce a vector!'
    );
  });
  it('throws if matrix is invalid', () => {
    expect(() =>
      M([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8]
      ])
    ).toThrow('Matrix shape is not uniform!');
  });
});

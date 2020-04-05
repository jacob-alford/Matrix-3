import { mat } from '../../types';

const forEachIn = (matrix: mat, callback: (i: number, j: number) => void): void => {
  const rowLength = matrix.length;
  for (let i = 0; i < rowLength; i++) {
    const colLength = matrix[i].length;
    for (let j = 0; j < colLength; j++) {
      callback(i, j);
    }
  }
};

export default forEachIn;

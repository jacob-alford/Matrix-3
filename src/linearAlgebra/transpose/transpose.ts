import { mat } from '../../types';
import { forEachIn, fillEmpty } from '../../utils';

const transpose = (matrix: mat): Promise<mat> => {
  const outMat: mat = [];
  fillEmpty(outMat, matrix[0].length);
  forEachIn(matrix, (i: number, j: number): void => {
    outMat[j].push(matrix[i][j]);
  });
  return Promise.resolve(outMat);
};

export default transpose;

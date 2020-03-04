import { mat } from "../../types";

const forEachIn = (
  matrix: mat,
  callback: (i: number, j: number) => void
): void => {
  const rowLength = matrix.length;
  for (let i = 0; i < rowLength; i++) {
    const colLength = matrix[i].length;
    for (let j = 0; j < colLength; j++) {
      callback(i, j);
    }
  }
};
const fillEmpty = (mat: mat, num: number): void => {
  for (let i = 0; i < num; i++) {
    mat.push([]);
  }
};

const transpose = (matrix: mat): mat => {
  const outMat: mat = [];
  fillEmpty(outMat, matrix[0].length);
  forEachIn(matrix, (i: number, j: number): void => {
    outMat[j].push(matrix[i][j]);
  });
  return outMat;
};

export default transpose;

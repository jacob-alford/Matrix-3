import { vec, mat, accessor, Matrix } from "./types/data-structures";

const a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const $ = accessor[":"];

const M = (data: mat): Matrix => (
  index1: number | accessor,
  index2: number | accessor
): number | mat | vec => {
  if (index1 === accessor[":"] && index2 === accessor[":"]) return data;
  else if (index1 === accessor[":"] && index2 !== accessor[":"])
    return data[index2];
  else if (index1 !== accessor[":"] && index2 === accessor[":"])
    return data[index1];
  else return data[index1][index2];
};

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
const fillEmpty = (mat: mat, num): void => {
  for (let i = 0; i < num; i++) {
    mat.push([]);
  }
};
const transpose = (_mat: Matrix): Matrix => {
  const matrix = _mat($, $);
  const outMat = [];
  fillEmpty(outMat, matrix[0].length);
  forEachIn(matrix, (i: number, j: number): void => {
    outMat[j].push(matrix[i][j]);
  });
  return M(outMat);
};

const A = M(a);
console.log(A($, $));
console.log(transpose(a)($, $));

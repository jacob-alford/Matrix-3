import { mat, vec } from 'types';

const slice = (
  A: mat,
  rowIndex0 = 0,
  rowIndex1?: number,
  colIndex0 = 0,
  colIndex1?: number
): mat =>
  A.slice(rowIndex0, rowIndex1 || A.length).map(row =>
    row.slice(colIndex0, colIndex1 || row.length)
  );

export default slice;

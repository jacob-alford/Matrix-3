import { mat, vec } from 'types';
import { slice, isVec } from 'utils';

const getBoundsFromQuery = (A: mat | vec, query: string | number): [number, number] => {
  if (typeof query === 'string') {
    const queryBounds = query.split(':');
    const lowerBound = Boolean(queryBounds[0]) && parseInt(queryBounds[0], 10);
    const upperBound = Boolean(queryBounds[1]) && parseInt(queryBounds[1], 10);
    return [lowerBound ? lowerBound : 0, upperBound ? upperBound : A.length];
  }
  return [query, query + 1];
};

const getFromVec = (A: vec, rowQuery: string | number): vec | number => {
  const [rowId0, rowId1] = getBoundsFromQuery(A, rowQuery);
  const returnVec = A.slice(rowId0, rowId1);
  if (returnVec.length === 1) return returnVec[0];
  return returnVec;
};

const getFromMat = (
  A: mat,
  rowQuery: string | number,
  colQuery: string | number
): mat | vec | number => {
  const [rowId0, rowId1] = getBoundsFromQuery(A, rowQuery || ':');
  const [colId0, colId1] = getBoundsFromQuery(A, colQuery || ':');
  const returnMat = slice(A, rowId0, rowId1, colId0, colId1);
  if (returnMat.length === 1 && returnMat[0] && returnMat[0].length === 1)
    return returnMat[0][0];
  if (returnMat.length === 1 || (returnMat[0] && returnMat[0].length === 1))
    return returnMat.flat();
  return returnMat;
};

const getFrom = (
  A: mat | vec,
  rowQuery?: string | number,
  colQuery?: string | number
): mat | vec | number => {
  if (isVec(A)) return getFromVec(A, rowQuery || ':');
  return getFromMat(A, rowQuery || ':', colQuery || ':');
};

export default getFrom;

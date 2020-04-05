import { vec, mat, memoCache } from '../../types';
import { validateSameShape, memoize, isVec, isMat } from '../';

const makeDoubleOp = (
  operation: (item1: number, item2: number) => number,
  funcName?: string,
  requireSameShape = true
): ((item1: vec | mat, item2: vec | mat) => Promise<number | vec | mat>) => {
  const vecOp = async (vec1: vec, vec2: vec): Promise<vec> => {
    return new Promise((resolve, reject) => {
      try {
        if (requireSameShape) validateSameShape(vec1, vec2);
        const memo: memoCache<number> = {};
        resolve(
          vec1.map((num, index) =>
            memoize(memo, `${num},${vec2[index]}`, [num, vec2[index]], ([a, b]) =>
              operation(a, b)
            )
          )
        );
      } catch (err) {
        reject(err);
      }
    });
  };
  const matOp = async (mat1: mat, mat2: mat): Promise<mat> => {
    return new Promise((resolve, reject) => {
      try {
        if (requireSameShape) validateSameShape(mat1, mat2);
        const memo: memoCache<number> = {};
        resolve(
          mat1.map((row, rIndex) =>
            row.map((col, cIndex) =>
              memoize(
                memo,
                `${col},${mat2[rIndex][cIndex]}`,
                [col, mat2[rIndex][cIndex]],
                ([a, b]) => operation(a, b)
              )
            )
          )
        );
      } catch (err) {
        reject(err);
      }
    });
  };
  return async (item1: vec | mat, item2: vec | mat): Promise<vec | mat> => {
    if (isVec(item1) && isVec(item2)) return vecOp(item1, item2);
    else if (isMat(item1) && isMat(item2)) return matOp(item1, item2);
    else
      return Promise.reject(
        new Error(`${funcName}() requires two items of the same type!`)
      );
  };
};

export default makeDoubleOp;

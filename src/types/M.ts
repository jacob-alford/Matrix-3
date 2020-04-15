import { mat, vec, shape as shapeType } from './data-structures';
import { checkValidity, isMat, isVec } from '../utils';
import { shape as shapeMat } from 'linearAlgebraUtils';

interface matConstructorOptions {
  newRowDelimiter?: string;
  newColDelimiter?: string;
  shape?: shapeType;
}

export const M = (item: mat | vec | string, options?: matConstructorOptions): mat => {
  const { newRowDelimiter = ';', newColDelimiter = ',', shape } = options || {};
  const matrix = ((A: mat | vec | string): mat => {
    if (typeof A === 'string')
      return A.split(newRowDelimiter).map(row =>
        row.split(newColDelimiter).map(item => {
          const num = +item;
          if (!isNaN(num)) return num;
          throw new Error(`Item '${item.trim()}' is not a number!`);
        })
      );
    if (isVec(A)) {
      if (!shape)
        throw new Error(`options.shape is required to construct a matrix from a vector!`);
      const returnMat = shapeMat(A, shape);
      if (isVec(returnMat))
        throw new Error(`options.shape: [${shape.join(',')}] would produce a vector!`);
      return returnMat;
    }
    return A;
  })(item);
  checkValidity(matrix);
  return matrix;
};

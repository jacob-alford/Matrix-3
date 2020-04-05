import { mat, vec } from 'types';
import { isSquare, shape } from 'utils';

const validateLUP = (A: mat): void => {
  if (!isSquare(A))
    throw new Error(
      `Matrix decomposition valid only for a square matrix, recieved shape: [${shape(
        A
      ).join(',')}]`
    );
};

export default validateLUP;

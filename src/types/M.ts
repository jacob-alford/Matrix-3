import { mat, vec } from './data-structures';
import { checkValidity } from '../utils';

export const M = (matrix: mat): mat => {
  checkValidity(matrix);
  return matrix;
};

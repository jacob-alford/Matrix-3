import { vec } from '../types';
import { checkValidity } from '../utils';

export const V = (vector: vec): vec => {
  checkValidity(vector);
  return vector;
};

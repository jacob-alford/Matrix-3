import { mat } from 'types';

const copy = (A: mat): mat => {
  const a = Array(A.length).fill(0);
  return a.map((_, index) => [...A[index]]);
};

export default copy;

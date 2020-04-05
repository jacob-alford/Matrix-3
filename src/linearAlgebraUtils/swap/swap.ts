import { mat } from 'types';

function swap(A: mat, index0: number, index1: number): mat {
	if (index0 === index1) return A;
	const row0 = A[index0];
	const row1 = A[index1];
	A[index1] = row0;
	A[index0] = row1;
	return A;
}

export default swap;

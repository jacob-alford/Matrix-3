import { mat } from '../../types';

/* Assumes uniformity */
const isSquare = (matrix: mat): boolean => {
	const rows = matrix.length;
	const cols = matrix[0].length;
	return rows === cols;
};

export default isSquare;

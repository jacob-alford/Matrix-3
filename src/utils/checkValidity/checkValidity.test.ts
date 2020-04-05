import checkValidity from './checkValidity';
import { mat, vec } from '../../types';

it('validates matricies', () => {
	const a = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];
	const b = [
		[1, 2],
		[3, 4, 5],
		[6, 7, 8, 9]
	];
	const c: mat = [];
	const d = [[], [1]];
	const e = [[1], [1, 2]];
	const f = [
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8]
	];
	const g = [1, 2, 3, 4];
	expect(checkValidity(a)).toBe(true);
	expect(() => checkValidity(b)).toThrowError('Matrix shape is not uniform!');
	expect(() => checkValidity(c)).toThrowError('Unable to create empty matrix or vector!');
	expect(() => checkValidity(d)).toThrowError(
		'Unable to create a matrix with empty rows!'
	);
	expect(() => checkValidity(e)).toThrowError('Matrix shape is not uniform!');
	expect(checkValidity(f)).toBe(true);
	expect(checkValidity(g)).toBe(true);
});

import { mat } from 'types';
import fillEmpty from './fillEmpty';

it('fills an array with empty arrays', () => {
	const A: mat = [];
	fillEmpty(A, 4);
	expect(A).toStrictEqual([[], [], [], []]);
});

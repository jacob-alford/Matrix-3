import slice from './slice';

const a = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
];

describe('slice functions properly', () => {
	it('returns the entire matrix', () => {
		expect(slice(a)).toStrictEqual(a);
	});
	it('returns a portion of the matrix', () => {
		expect(slice(a, 0, 2, 0, 2)).toStrictEqual([
			[1, 2],
			[5, 6]
		]);
	});
	it('returns a portion of a matrix with default values', () => {
		expect(slice(a, 2, undefined, 2)).toStrictEqual([
			[11, 12],
			[15, 16]
		]);
	});
});

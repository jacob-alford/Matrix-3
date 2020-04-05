import maxInColumn from './maxInColumn';

describe('maxInColumn functions properly', () => {
	it('Finds the max in a specified column', () => {
		const A = [
			[1, 2, 13],
			[6, 9, 12],
			[48, 1, 11]
		];
		expect(maxInColumn(A, 0)).toStrictEqual([2, 48]);
		expect(maxInColumn(A, 1)).toStrictEqual([1, 9]);
		expect(maxInColumn(A, 2)).toStrictEqual([0, 13]);
	});

	it('Finds the max with a specified operation', () => {
		const A = [
			[1, -2, -3],
			[4, 5, -69],
			[-7, 8, -9]
		];
		expect(maxInColumn(A, 0, Math.abs)).toStrictEqual([2, 7]);
		expect(maxInColumn(A, 1, Math.abs)).toStrictEqual([2, 8]);
		expect(maxInColumn(A, 2, Math.abs)).toStrictEqual([1, 69]);
	});
});

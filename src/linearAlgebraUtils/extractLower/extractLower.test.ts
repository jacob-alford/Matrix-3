import extractLower from './extractLower';

describe('extractLower functions properly', () => {
	it('extracts a lower matrix', () => {
		const A = [
			[1, 2, 3, 4],
			[5, 6, 7, 8],
			[9, 10, 11, 12],
			[13, 14, 15, 16]
		];
		expect(extractLower(A)).toStrictEqual([
			[1, 0, 0, 0],
			[5, 1, 0, 0],
			[9, 10, 1, 0],
			[13, 14, 15, 1]
		]);
	});
});

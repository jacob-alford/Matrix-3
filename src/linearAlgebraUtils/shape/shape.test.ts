import shape from './shape';

describe('shape() functions properly', () => {
	it('throws on type mismatch', () => {
		const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		expect(() => shape(a, [3, 4])).toThrow(
			'Type mismatch between supplied array and supplied shape; recieved array of length: 9, for shape: [3,4]'
		);
	});
	it('shapes a matrix', () => {
		const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		expect(shape(a, [3, 3])).toStrictEqual([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		]);
	});
	it('shapes a row vector', () => {
		const a = [6, 9, 420];
		expect(shape(a, [1, 3])).toStrictEqual([6, 9, 420]);
	});
	it('shapes a column vector', () => {
		const a = [6, 9, 420];
		expect(shape(a, [3, 1])).toStrictEqual([6, 9, 420]);
	});
	it('shapes a non-square matrix', () => {
		const a = [1, 2, 3, 4, 5, 6];
		expect(shape(a, [2, 3])).toStrictEqual([
			[1, 2, 3],
			[4, 5, 6]
		]);
	});
});

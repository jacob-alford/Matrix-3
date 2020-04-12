import range from './range';

describe('range() functions properly', () => {
	it('throws for invalid range', () => {
		expect(() => range(1, 10, [4, 4])).toThrow(
			`Shape and range mismatch!  Recieved bounds: [1,10) for shape: [4,4]`
		);
	});
	it('creates a sequential matrix', () => {
		expect(range(1, 10, [3, 3])).toStrictEqual([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		]);
	});
});

import getFrom from './getFrom';

const A = [
	[1, 2, 3, 4],
	[4, 5, 6, 5],
	[7, 8, 9, 6],
	[7, 8, 9, 10]
];

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

describe('getFrom functions properly', () => {
	it('gets the whole item with no params', () => {
		expect(getFrom(A)).toStrictEqual(A);
	});
	it('gets a coordinate', () => {
		expect(getFrom(A, 1, 1)).toBe(5);
	});
	it('gets a row', () => {
		expect(getFrom(A, 2, ':')).toStrictEqual([7, 8, 9, 6]);
	});
	it('gets a column', () => {
		expect(getFrom(A, ':', 3)).toStrictEqual([4, 5, 6, 10]);
	});
	it('gets a range', () => {
		expect(getFrom(A, '1:3', '0:3')).toStrictEqual([
			[4, 5, 6],
			[7, 8, 9]
		]);
	});
	it('gets a range to end', () => {
		expect(getFrom(A, '2:', '2:')).toStrictEqual([
			[9, 6],
			[9, 10]
		]);
	});
	it('gets a range from beginning', () => {
		expect(getFrom(A, ':2', ':2')).toStrictEqual([
			[1, 2],
			[4, 5]
		]);
	});
	it('gets a coordinate of a vector', () => {
		expect(getFrom(a, 1)).toBe(1);
	});
	it('gets a range from a vector', () => {
		expect(getFrom(a, '2:5')).toStrictEqual([2, 3, 4]);
	});
	it('gets a range to end of a vector', () => {
		expect(getFrom(a, '2:')).toStrictEqual([2, 3, 4, 5, 6, 7, 8, 9]);
	});
	it('gets a range from beginning of a vector', () => {
		expect(getFrom(a, ':2')).toStrictEqual([0, 1]);
	});
});

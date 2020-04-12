import step from './step';

describe('step() functions properly', () => {
	it('Throws with mismatched matrix shape', () => {
		expect(() => step(0, 1000, 10, [33, 3])).toThrow(
			'Provided parameters do not fit the provided matrix shape!  Recieved bounds: [0,1000), with step size: 10, with matrix shape [33,3]'
		);
	});
	it('Creates a stepped vector', () => {
		expect(step(0, 10, 2)).toStrictEqual([0, 2, 4, 6, 8]);
	});
	it('Creates a stepped matrix', () => {
		expect(step(0, 36, 3, [4, 3])).toStrictEqual([
			[0, 3, 6],
			[9, 12, 15],
			[18, 21, 24],
			[27, 30, 33]
		]);
	});
});

import matMul from './matMul';

it('multiplies matricies in a linear algebra fashion', async () => {
	const a = [
		[11, 3],
		[7, 11]
	];
	const b = [
		[8, 0, 1],
		[0, 3, 5]
	];
	const c = [
		[1, 2],
		[3, 4],
		[5, 6]
	];
	expect(await matMul(a, b)).toStrictEqual([
		[88, 9, 26],
		[56, 33, 62]
	]);
	await expect(matMul(a, c)).rejects.toThrowError(
		'Cannot perform matrix multiplication on matricies with differing inner dimensions!'
	);
});

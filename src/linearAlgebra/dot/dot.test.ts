import dot from './dot';

it('dots two vectors', async () => {
	const a = [1, 2, 3];
	const b = [4, 5, 6];
	const c = [7, 8, 9, 0];
	expect(await dot(a, b)).toBe(32);
	await expect(dot(b, c)).rejects.toThrow('Supplied arguments do not match in shape!');
});

import LUP from './LUP';
import { matMul, transpose } from 'linearAlgebra';

describe('LUP functions properly', () => {
	it('throws on non-square matrix', async () => {
		const A = [
			[1, 2, 3],
			[4, 5, 6]
		];
		await expect(LUP(A)).rejects.toThrow(
			'Matrix decomposition valid only for a square matrix, recieved shape: [2,3]'
		);
	});
	it('throws on singular matrix', async () => {
		const A = [
			[0, 1, 2, 3],
			[0, 4, 5, 6],
			[0, 7, 8, 9],
			[0, 10, 11, 12]
		];
		await expect(LUP(A)).rejects.toThrow('Provided matrix is singular!');
	});
	it('decomposes a matrix into a lower triangular matrix', async () => {
		const A = [
			[0, 1, 0],
			[-8, 8, 1],
			[2, -2, 0]
		];
		const expectedL = [
			[1, 0, 0],
			[-0, 1, 0],
			[-1 / 4, 0, 1]
		];
		const [L] = await LUP(A);
		expect(L).toStrictEqual(expectedL);
	});
	it('decomposes a matrix into an upper triangular matrix', async () => {
		const A = [
			[0, 1, 0],
			[-8, 8, 1],
			[2, -2, 0]
		];
		const expectedU = [
			[-8, 8, 1],
			[0, 1, 0],
			[0, 0, 1 / 4]
		];
		const [, U] = await LUP(A);
		expect(U).toStrictEqual(expectedU);
	});
	it('decomposes a matrix into a permutation matrix', async () => {
		const A = [
			[0, 1, 0],
			[-8, 8, 1],
			[2, -2, 0]
		];
		const expectedP = [
			[0, 1, 0],
			[1, 0, 0],
			[0, 0, 1]
		];
		const [, , P] = await LUP(A);
		expect(P).toStrictEqual(expectedP);
	});
	it('works for large and complex matricies', async () => {
		const A = [
			[2, 10, 8, 8, 6],
			[1, 4, -2, 4, -1],
			[0, 2, 3, 2, 1],
			[3, 8, 3, 10, 9],
			[1, 4, 1, 2, 1]
		];
		const [L, U, P] = await LUP(A);
		const Pt = await transpose(P);
		const PtL = await matMul(Pt, L);
		const PtLU = await matMul(PtL, U);
		expect(PtLU).toStrictEqual(A);
	});
});

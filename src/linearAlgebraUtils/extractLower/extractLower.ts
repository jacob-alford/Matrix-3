import { mat } from 'types';
import { identity } from 'linearAlgebraUtils';
import { forEachFrom } from 'utils';

const extractLower = (A: mat): mat => {
	const n = A.length;
	const outArr = identity(n);
	forEachFrom(outArr, 1, n, (_, i) => {
		forEachFrom(outArr[i], 0, i, (_, j) => {
			outArr[i][j] = A[i][j];
		});
	});
	return outArr;
};

export default extractLower;

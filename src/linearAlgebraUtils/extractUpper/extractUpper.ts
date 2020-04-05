import { mat } from 'types';
import { identity } from 'linearAlgebraUtils';
import { forEachFrom } from 'utils';

const extractUpper = (A: mat): mat => {
	const n = A.length;
	const outMat = identity(n);
	forEachFrom(outMat, 0, n, (_, i) => {
		forEachFrom(outMat[i], i, n, (_, j) => {
			outMat[i][j] = A[i][j];
		});
	});
	return outMat;
};

export default extractUpper;

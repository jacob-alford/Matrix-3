import { shape as shapeType, mat, vec } from 'types';
import { shape } from 'linearAlgebraUtils';

const floor = (num: number): number => num | 0;

const step = (
	initialValue: number,
	upperBound: number,
	stepSize = 1,
	matShape?: shapeType
): mat | vec => {
	const length = (upperBound - initialValue) / stepSize;
	const [rows, cols] = matShape || [1, length];
	if (length !== rows * cols)
		throw new Error(
			`Provided parameters do not fit the provided matrix shape!  Recieved bounds: [${initialValue},${upperBound}), with step size: ${stepSize}, with matrix shape [${rows},${cols}]`
		);
	return shape(
		Array.from({ length }, (_, index) => index * stepSize + initialValue),
		[rows, cols]
	);
};

export default step;

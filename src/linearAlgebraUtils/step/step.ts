import { shape as shapeType, mat, vec } from 'types';
import { shape } from 'linearAlgebraUtils';

const step = (
	initialValue: number,
	upperBound: number,
	stepSize: number,
	matShape?: shapeType
): mat | vec => {
	const length = (upperBound - initialValue) / stepSize;
	const [rows, cols] = matShape || [1, length];
	if ((length | 0) !== rows * cols)
		throw new Error(
			`Provided arguments do not fit the provided matrix shape!  Recieved bounds: [${initialValue},${upperBound}), with step size: ${stepSize}, with matrix shape [${rows},${cols}]`
		);
	return shape(
		Array.from({ length }, (_, index) => index * stepSize + initialValue),
		[rows, cols]
	);
};

export default step;

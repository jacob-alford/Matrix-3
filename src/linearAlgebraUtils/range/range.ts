import { shape as shapeType, mat, vec } from 'types';
import { step } from 'linearAlgebraUtils';

const range = (lowerBound: number, upperBound: number, shape: shapeType): mat | vec => {
	const [rows, cols] = shape;
	if (rows * cols !== upperBound - lowerBound)
		throw new Error(
			`Shape and range mismatch!  Recieved bounds: [${lowerBound},${upperBound}) for shape: [${shape.join(
				','
			)}]`
		);
	return step(lowerBound, upperBound, 1, shape);
};

export default range;

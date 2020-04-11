import { shape as shapeType, mat, vec } from 'types';
import { shape as shapeMat } from 'linearAlgebraUtils';

const range = (lowerBound: number, upperBound: number, shape: shapeType): mat | vec => {
	if (shape[1] * shape[0] !== upperBound - lowerBound)
		throw new Error(
			`Shape and range mismatch!  Recieved bounds: [${lowerBound},${upperBound}) for shape: [${shape.join(
				','
			)}]`
		);
	return shapeMat(
		Array.from({ length: upperBound - lowerBound }, (_, index) => index + lowerBound),
		shape
	);
};

export default range;

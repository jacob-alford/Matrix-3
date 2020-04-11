import { vec, mat, shape as shapeType } from 'types';

const shape = (arr: vec, matShape: shapeType): vec | mat => {
	const [rows, cols] = matShape;
	if (arr.length !== rows * cols)
		throw new Error(
			`Type mismatch between supplied array and supplied shape; recieved array of length: ${
				arr.length
			}, for shape: [${matShape.join(',')}]`
		);
	if (rows === 1 || cols === 1) return arr;
	return arr.reduce((outMat: mat, nextVal, index) => {
		const nextIndex = (index / cols) | 0;
		if (!outMat[nextIndex]) outMat.push([]);
		outMat[nextIndex].push(nextVal);
		return outMat;
	}, []);
};

export default shape;

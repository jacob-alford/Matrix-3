import { vec, mat } from '../../types';
import { isVec, isMat, shape } from '../';

const validateSameShape = (item1: vec | mat, item2: vec | mat, errStr?: string): void => {
	if (!((isVec(item1) && isVec(item2)) || (isMat(item1) && isMat(item2))))
		throw new Error(errStr || `Supplied arguments are of different types!`);
	const i1Shp = shape(item1);
	const i2Shp = shape(item2);
	if (i1Shp[0] !== i2Shp[0] || i1Shp[1] !== i2Shp[1])
		throw new Error(errStr || `Supplied arguments do not match in shape!`);
	return;
};

export default validateSameShape;

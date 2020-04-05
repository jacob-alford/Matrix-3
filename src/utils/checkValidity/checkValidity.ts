import { mat, vec } from '../../types';

const checkValidity = (item: mat | vec): boolean => {
	if (item.length === 0) throw new Error('Unable to create empty matrix or vector!');
	if (typeof item[0] === 'number') return true;
	if (item[0].length === 0) throw new Error('Unable to create a matrix with empty rows!');
	const colLength = item[0].length;
	for (let row of item) {
		if (!Array.isArray(row) || row.length !== colLength)
			throw new Error('Matrix shape is not uniform!');
	}
	return true;
};

export default checkValidity;

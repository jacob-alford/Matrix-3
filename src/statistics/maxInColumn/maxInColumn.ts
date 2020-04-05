import { mat, memoCache } from 'types';
import { memoize } from 'utils';

const maxInColumn = (
	A: mat,
	columnIndex: number,
	operation = (val: number) => val,
	startingIndex = 0,
	startingValue = 0
): number[] => {
	const operationCache: memoCache<number> = {};
	return A.reduce(
		([maxIndex, maxValue], row, index) => {
			const nextValue = memoize(
				operationCache,
				`${row[columnIndex]}`,
				[row[columnIndex]],
				([num]) => operation(num)
			);
			return [
				maxValue > nextValue ? maxIndex : startingIndex + index,
				maxValue > nextValue ? maxValue : nextValue
			];
		},
		[startingIndex, startingValue]
	);
};

export default maxInColumn;

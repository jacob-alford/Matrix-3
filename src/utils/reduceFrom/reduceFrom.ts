function reduceFrom<arrType, returnType>(
	A: arrType[],
	index0: number,
	index1: number,
	callback: (
		accumulator: returnType,
		nextValue: arrType,
		index: number,
		array: arrType[]
	) => returnType,
	initialValue: returnType
) {
	let accumulator = initialValue;
	for (let i = index0; i < index1; i++) {
		accumulator = callback(accumulator, A[i], i, A);
	}
	return accumulator;
}

export default reduceFrom;

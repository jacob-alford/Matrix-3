import forEachFrom from './forEachFrom';

it('forEachFrom iterates over a slice of an array', () => {
	const a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const callback = jest.fn();
	forEachFrom(a, 5, 8, callback);
	expect(callback).toHaveBeenNthCalledWith(1, '5', 5, a);
	expect(callback).toHaveBeenNthCalledWith(2, '6', 6, a);
	expect(callback).toHaveBeenNthCalledWith(3, '7', 7, a);
});

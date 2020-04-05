import { vec } from '../types';
import { checkValidity } from '../utils';

const V = (vector: vec): vec => {
	checkValidity(vector);
	return vector;
};

export default V;

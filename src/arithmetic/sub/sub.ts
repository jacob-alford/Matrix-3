import { makeElementwiseOp } from '../../utils';

const sub = (a: number, b: number): number => a - b;

export default makeElementwiseOp(sub, 'Sub');

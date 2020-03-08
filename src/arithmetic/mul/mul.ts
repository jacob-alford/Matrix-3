import { makeElementwiseOp } from "../../utils";

const mul = (a: number, b: number): number => a * b;

export default makeElementwiseOp(mul, "Mul");

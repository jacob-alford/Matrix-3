import { makeElementwiseOp } from "../../utils";

const div = (a: number, b: number): number => a / b;

export default makeElementwiseOp(div, "Div");

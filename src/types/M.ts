import { mat, vec } from "./data-structures";
import { checkValidity } from "../utils";

const M = (matrix: mat): mat => {
  checkValidity(matrix);
  return matrix;
};

export default M;

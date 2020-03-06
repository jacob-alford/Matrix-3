import { vec, mat } from "../../types";
import { validateSameShape } from "../../utils";

const addVecs = (vec1: vec, vec2: vec): vec => {
  validateSameShape(vec1, vec2);
  return vec1.map((num, index) => num + vec2[index]);
};

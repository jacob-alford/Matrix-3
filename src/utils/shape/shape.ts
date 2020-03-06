import { vec, mat } from "../../types";
import { isVec } from "../";

const vecShape = (vec: vec): [number, number] => {
  return [1, vec.length];
};

const matShape = (mat: mat): [number, number] => {
  return [mat.length, mat[0].length];
};

const shape = (item: mat | vec): [number, number] => {
  if (isVec(item)) return vecShape(item);
  else return matShape(item);
};

export default shape;

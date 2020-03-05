import { vec, mat } from "../../types";

const isVec = (item: vec | mat): item is vec => {
  return typeof item[0] === "number";
};

export default isVec;

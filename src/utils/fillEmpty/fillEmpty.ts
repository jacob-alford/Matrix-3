import { mat } from "../../types";

const fillEmpty = (mat: mat, num: number): void => {
  for (let i = 0; i < num; i++) {
    mat.push([]);
  }
};

export default fillEmpty;

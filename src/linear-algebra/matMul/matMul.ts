import { mat } from "../../types";
import { shape } from "../../utils";
import { dot, transpose } from "../";

const isCompatible = (mat1: mat, mat2: mat): boolean => {
  const shp1 = shape(mat1);
  const shp2 = shape(mat2);
  return shp1[1] === shp2[0];
};

const matMul = async (mat1: mat, mat2: mat): Promise<mat> => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!isCompatible(mat1, mat2))
        throw new Error(
          "Cannot perform matrix multiplication on matricies with differing inner dimensions!"
        );
      const mat2T = await transpose(mat2);
      const outMat: mat = [];
      for (const m1Row of mat1) {
        const outMatRow = [];
        for (const m2Col of mat2T) {
          outMatRow.push(await dot(m1Row, m2Col));
        }
        outMat.push(outMatRow);
      }
      resolve(outMat);
    } catch (err) {
      reject(err);
    }
  });
};

export default matMul;

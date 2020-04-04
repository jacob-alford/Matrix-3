import { mat, vec, memoCache } from "types";
import validateLUP from "./validate";
import maxInColumn from "statistics/maxInColumn/maxInColumn";
import { forEachFrom, memoize } from "utils";
import { swap, identity, extractLower, extractUpper } from "linearAlgebraUtils";

const LUP = (A: mat): Promise<[mat, mat, mat]> => {
  return new Promise((resolve, reject) => {
    try {
      validateLUP(A);
    } catch (err) {
      reject(err);
    }
    const opCache: memoCache<number> = {};
    const a = [...A];
    const n = a.length;
    const P = identity(n);
    /* n operations */
    forEachFrom(a, 0, n - 1, (_, k) => {
      const [maxIndex, maxValue] = maxInColumn(A, k, Math.abs);
      if (maxValue === 0) reject(new Error("Provided matrix is singular!"));
      swap(a, k, maxIndex);
      swap(P, k, maxIndex);
      forEachFrom<vec>(a, k + 1, n, (_, i) => {
        a[i][k] = memoize(
          opCache,
          `${a[i][k]}/${a[k][k]}`,
          [a[i][k], a[k][k]],
          ([a, b]) => a / b
        );
      });
      forEachFrom<vec>(a, k + 1, n, (_, i) => {
        forEachFrom<vec>(a, k + 1, n, (_, j) => {
          const multiplication = memoize(
            opCache,
            `${a[i][k]}*${a[k][j]}`,
            [a[i][k], a[k][j]],
            ([a, b]) => a * b
          );
          a[i][j] = memoize(
            opCache,
            `${a[i][j]}-${multiplication}`,
            [a[i][j], multiplication],
            ([a, b]) => a - b
          );
        });
      });
    });
    if (a[n - 1][n - 1] === 0)
      reject(new Error("Provided matrix is singular!"));
    resolve([extractLower(a), extractUpper(a), P]);
  });
};

export default LUP;

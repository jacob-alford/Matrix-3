import { mat, vec, memoCache } from 'types';
import validateLUP from './validate';
import maxInColumn from 'statistics/maxInColumn/maxInColumn';
import { forEachFrom, memoize, slice, copy } from 'utils';
import { swap, identity, extractLower, extractUpper } from 'linearAlgebraUtils';

const LUP = (A: mat): Promise<[mat, mat, mat]> => {
  return new Promise((resolve, reject) => {
    try {
      validateLUP(A);
    } catch (err) {
      reject(err);
    }
    const opCache: memoCache<number> = {};
    const a = copy(A);
    const n = a.length;
    const P = identity(n);
    forEachFrom(a, 0, n, (_, k) => {
      const [maxIndex, maxValue] = maxInColumn(slice(a, k), k, Math.abs, k);
      if (maxValue === 0) reject(new Error('Provided matrix is singular!'));
      swap(a, k, maxIndex);
      swap(P, k, maxIndex);
      forEachFrom<vec>(a, k + 1, n, (_, row) => {
        /* aik = aik / akk */
        a[row][k] = memoize(
          opCache,
          `${a[row][k]}/${a[k][k]}`,
          [a[row][k], a[k][k]],
          ([a, b]) => a / b
        );
      });
      forEachFrom<vec>(a, k + 1, n, (_, row) => {
        forEachFrom<vec>(a, k + 1, n, (_, col) => {
          const multiplier = memoize(
            opCache,
            `${a[row][k]}*${a[k][col]}`,
            [a[row][k], a[k][col]],
            ([a, b]) => a * b
          );
          a[row][col] = memoize(
            opCache,
            `${a[row][col]}-${multiplier}`,
            [a[row][col], multiplier],
            ([a, b]) => a - b
          );
        });
      });
    });
    if (a[n - 1][n - 1] === 0) reject(new Error('Provided matrix is singular!'));
    resolve([extractLower(a), extractUpper(a), P]);
  });
};

export default LUP;

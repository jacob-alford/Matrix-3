import { mat, memoCache } from "types";
import { memoize } from "utils";

const maxInColumn = (
  A: mat,
  columnIndex: number,
  operation = (val: number) => val
): number[] => {
  const operationCache: memoCache<number> = {};
  return A.reduce(
    ([maxIndex, maxValue], row, index) => {
      const nextValue = memoize(
        operationCache,
        `${row[columnIndex]}`,
        [row[columnIndex]],
        ([num]) => operation(num)
      );
      return [
        maxValue > nextValue ? maxIndex : index,
        maxValue > nextValue ? maxValue : nextValue,
      ];
    },
    [0, 0]
  );
};

export default maxInColumn;

import { vec, memoCache } from "../../types";
import { memoize, validateSameShape } from "../../utils";

const dot = (item1: vec, item2: vec): Promise<number> => {
  return new Promise((resolve, reject) => {
    try {
      validateSameShape(item1, item2);
      const memo: memoCache<number> = {};
      resolve(
        item1.reduce((total, xi, index) => {
          const mult = memoize(
            memo,
            `${xi}*${item2[index]}`,
            [xi, item2[index]],
            ([xi, yi]) => xi * yi
          );
          const add = memoize(
            memo,
            `${total}+${mult}`,
            [total, mult],
            ([tot, mul]) => tot + mul
          );
          return add;
        }, 0)
      );
    } catch (err) {
      reject(err);
    }
  });
};

export default dot;

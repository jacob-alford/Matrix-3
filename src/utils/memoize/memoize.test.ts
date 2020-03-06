import { memoCache } from "../../types";
import memoize from "./memoize";

it("memoizes operations", () => {
  const memo: memoCache<number> = {};
  memoize(memo, "0,1", [0, 1], ([a, b]) => a * b);
  memoize(memo, "1,2", [1, 2], ([a, b]) => a * b);
  memoize(memo, "1,2", [1, 2], ([a, b]) => a * b);
  memoize(memo, "4,20", [4, 20], ([a, b]) => a * b);
  expect(memo).toMatchObject({
    "0,1": 0,
    "1,2": 2,
    "4,20": 80
  });
});

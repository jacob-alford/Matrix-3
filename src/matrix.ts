import { M, V } from "./types";
import { matMul, dot } from "./linear-algebra";
import { add, sub, mul, div } from "./arithmetic";

const a = M([
  [11, 3],
  [7, 11]
]);
const b = M([
  [8, 0, 1],
  [0, 3, 5]
]);
const c = M([
  [1, 2],
  [3, 4]
]);
const d = M([
  [1, 2, 3],
  [4, 5, 6]
]);

const e = V(
  Array(50000)
    .fill(0)
    .map(() => (Math.random() * 100) | 0)
);
const f = V(
  Array(50000)
    .fill(0)
    .map(() => (Math.random() * 100) | 0)
);

const beginTime = Date.now();
const timeAndLog = (name: string) => (item: any): void => {
  console.log(name, item, `total time: ${Date.now() - beginTime}ms`);
};

dot(e, f).then(timeAndLog("dot"));
matMul(a, b).then(timeAndLog("matMul:"));
add(a, c).then(timeAndLog("add:"));
sub(d, b).then(timeAndLog("sub:"));
mul(a, c).then(timeAndLog("mul:"));
div(b, d).then(timeAndLog("div:"));

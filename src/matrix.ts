import { M } from "./types";
import { matMul } from "./linear-algebra";

const a = M([
  [11, 3],
  [7, 11]
]);
const b = M([
  [8, 0, 1],
  [0, 3, 5]
]);

matMul(a, b).then(console.log);

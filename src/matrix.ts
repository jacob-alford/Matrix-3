import { M } from "./types";
import { add } from "./arithmetic";

const a = M([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);
const b = M([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

const c = M([
  [1, 2, 3],
  [1, 2, 3]
]);

const d = M([
  [1, 2, 3],
  [1, 2, 3]
]);

add(a, b).then(console.log);
add(c, d).then(console.log);

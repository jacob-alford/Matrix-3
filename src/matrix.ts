import { M } from "./types";
import { transpose, fr } from "./functions";

const a = M([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

const at = transpose(a);

console.log(fr(at)(1)(2));

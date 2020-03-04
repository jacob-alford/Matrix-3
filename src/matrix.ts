import { M } from "./types";
import { transpose } from "./functions";

const a = M([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

console.log(a);
console.log(transpose(a));

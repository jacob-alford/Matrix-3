import { M } from "./types";
import { transpose, fr } from "./functions";
import { add } from "./arithmetic";

const a = M([
  Array(50000)
    .fill(0)
    .map(() => (Math.random() * 100) | 0),
  Array(50000)
    .fill(0)
    .map(() => (Math.random() * 100) | 0),
  Array(50000)
    .fill(0)
    .map(() => (Math.random() * 100) | 0)
]);

const c = M([
  [1, 2, 3],
  [1, 2, 3]
]);

const d = M([
  [1, 2, 3],
  [1, 2, 3]
]);

const longFunc = async () => {
  return await add(
    a,
    await add(a, await add(a, await add(a, await add(a, await add(a, a)))))
  );
};
longFunc().then(console.log);
add(c, d).then(console.log);

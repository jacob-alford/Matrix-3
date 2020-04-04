import { mat } from "types";

const identity = (size: number): mat =>
  Array(size)
    .fill(0)
    .map((_, i) =>
      Array(size)
        .fill(0)
        .map((_, j) => (i === j ? 1 : 0))
    );

export default identity;

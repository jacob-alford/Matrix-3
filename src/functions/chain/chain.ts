import { vec, mat, itemChain, accessor, $ } from "../../types";
import fr from "../fr/fr";

export default function from(item: vec | mat): itemChain<vec | mat> {
  return {
    _this: item,
    get(row?: accessor, col?: accessor) {
      if (row === $ && typeof col === "number") return fr(this._this)()(col);
      else if (typeof row === "number" && col === $)
        return fr(this._this)(row)();
      else if (typeof row === "number" && typeof col === "number")
        return fr(this._this)(row)(col);
      return this._this;
    },
    do(
      func: (a: vec | mat, b: vec | mat) => number | vec | mat
    ): (b: vec | mat) => number | itemChain<vec | mat> {
      return (b: vec | mat): number | itemChain<vec | mat> => {
        const out = func(this._this, b);
        if (typeof out === "number") return out;
        return from(out);
      };
    },
    apply(func: (a: vec | mat) => vec | mat): number | itemChain<vec | mat> {
      const out = func(this._this);
      if (typeof out === "number") return out;
      return from(out);
    }
  };
}

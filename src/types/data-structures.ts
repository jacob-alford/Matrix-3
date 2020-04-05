export type vec = number[];
export type mat = vec[];

export interface memoCache<T> {
  [key: string]: T;
}

enum accessors {
  ':' = ':'
}
export type accessor = number | string | accessors;
export const $ = accessors[':'];

export interface itemChain<item> {
  readonly _this: item;
  get: (index1?: accessor, index2?: accessor) => number | vec | mat;
  do: (
    func: (a: vec | mat, b: vec | mat) => vec | mat
  ) => (b: vec | mat) => number | itemChain<vec | mat>;
  apply: (func: (a: vec | mat) => vec | mat) => number | itemChain<vec | mat>;
}

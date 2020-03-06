export type vec = number[];
export type mat = vec[];

export interface memoCache<T> {
  [key: string]: T;
}

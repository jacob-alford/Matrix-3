export type vec = number[];
export type mat = vec[];

export type shape = [number, number];

export interface memoCache<T> {
  [key: string]: T;
}

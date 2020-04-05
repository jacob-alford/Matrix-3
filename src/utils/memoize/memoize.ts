import { memoCache } from '../../types';

export default function memoize<T>(
  cache: memoCache<T>,
  str: string,
  items: T[],
  func: (item: T[]) => T
): T {
  if (!cache[str]) cache[str] = func(items);
  return cache[str];
}

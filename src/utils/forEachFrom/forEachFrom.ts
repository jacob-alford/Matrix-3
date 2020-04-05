function forEachFrom<T>(
  A: T[],
  index0: number,
  index1: number,
  callback: (value: T, index: number, array: T[]) => void
): void {
  for (let i = index0; i < index1; i++) {
    callback(A[i], i, A);
  }
}

export default forEachFrom;

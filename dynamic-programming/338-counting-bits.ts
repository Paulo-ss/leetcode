function countBits(n: number): number[] {
  const arr = new Array<number>(n + 1).fill(0);
  let offset = 1;

  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }

    arr[i] = 1 + arr[i - offset];
  }

  return arr;
}

console.log({ bits: countBits(2) });

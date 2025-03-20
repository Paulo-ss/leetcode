function climbStairs(n: number): number {
  const steps = new Array<number>(n + 1).fill(0);
  steps[0] = 0;
  steps[1] = 1;
  steps[2] = 2;

  for (let i = 3; i < n + 1; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps[n];
}

console.log({ steps: climbStairs(4) });

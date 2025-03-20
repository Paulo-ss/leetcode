function minSubArrayLen(target: number, nums: number[]): number {
  let minLength = Infinity;
  let total = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    total += nums[r];

    while (total >= target) {
      minLength = Math.min(minLength, r - l + 1);
      total -= nums[l];
      l++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
}

console.log({ minSubArrayLen: minSubArrayLen(7, [2, 3, 1, 2, 4, 3]) });

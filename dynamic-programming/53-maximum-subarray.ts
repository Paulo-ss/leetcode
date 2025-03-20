function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let currentSum = 0;

  for (const n of nums) {
    if (currentSum < 0) {
      currentSum = 0;
    }

    currentSum += n;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log({ maxSubArray: maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) });

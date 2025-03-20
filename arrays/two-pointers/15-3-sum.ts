function threeSum(nums: number[]): number[][] {
  if (nums.length === 3 && nums.reduce((t, a) => t + a) !== 0) {
    return [];
  }

  nums.sort((a, b) => a - b);

  if (nums[0] > 0) {
    return [];
  }

  const triplets: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    if (nums[i] >= 0) {
      break;
    }

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      const currentSum = nums[i] + nums[l] + nums[r];

      if (currentSum > 0) {
        r--;
      } else if (currentSum < 0) {
        l++;
      } else {
        triplets.push([nums[i], nums[l], nums[r]]);
        l++;

        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  return triplets;
}

console.log({ threeSum: threeSum([-1, 0, 1, 2, -1, -4]) });
console.log({ threeSum: threeSum([0, 0, 0, 0]) });
console.log({ threeSum: threeSum([-1, 0, 1, 0]) });

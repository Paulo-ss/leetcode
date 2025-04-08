function maximumTripletValue(nums: number[]): number {
  let i = 0;
  let j = 1;
  let diff = -1;
  let greatestDiffJ = 1;

  while (j < nums.length) {
    if (nums[i] > nums[j]) {
      if (nums[i] - nums[j] > diff) {
        if (j < nums.length - 1) {
          diff = nums[i] - nums[j];
          greatestDiffJ = j;
        }
      }
    } else {
      i = j;
    }

    j++;
  }

  if (diff < 0) {
    return 0;
  }

  let k = greatestDiffJ + 1;
  let maximumValue = diff * nums[k];

  while (k < nums.length) {
    maximumValue = Math.max(maximumValue, diff * nums[k]);
    k++;
  }

  return maximumValue;
}

console.log({
  maximumTripletValue: maximumTripletValue([2, 3, 1]),
});

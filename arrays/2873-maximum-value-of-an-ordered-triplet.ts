function maximumTripletValue(nums: number[]): number {
  let maximumValue = 0;
  let i = 0;
  let j = 1;
  let k = 2;

  while (i <= nums.length - 3) {
    while (nums[i] - nums[j] > 0 && k < nums.length) {
      maximumValue = Math.max(maximumValue, (nums[i] - nums[j]) * nums[k]);

      k++;

      while (k < nums.length) {
        maximumValue = Math.max(maximumValue, (nums[i] - nums[j]) * nums[k]);
        k++;
      }

      j++;

      if (k === nums.length) {
        k = j + 1;
      }
    }

    i++;
    j = i + 1;
    k = i + 2;
  }

  return maximumValue;
}

console.log({
  maximumTripletValue: maximumTripletValue([1000000, 1, 1000000]),
});

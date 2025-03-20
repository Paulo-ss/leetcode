function removeDuplicates(nums: number[]): number {
  const noDuplicatesSet = new Set(nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== noDuplicatesSet[i]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return noDuplicatesSet.size;
}

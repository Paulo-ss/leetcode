function removeDuplicates(nums: number[]): number {
  let l = 0;
  let r = 0;

  while (r <= nums.length) {
    while (nums[l] === nums[r]) {
      r++;
    }

    if (nums[l] === nums[l + 1]) {
      nums.splice(l + 2, r - l - 2);
      l += 2;
      r = l;
    } else {
      nums.splice(l + 1, r - l - 1);
      l++;
      r = l;
    }
  }

  return nums.length;
}

console.log({
  removeDuplicates: removeDuplicates([1, 2, 2, 2]),
});

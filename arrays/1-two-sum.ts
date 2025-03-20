function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i <= nums.length; i++) {
    const minus = target - nums[i];

    if (map.has(minus)) {
      return [map.get(minus)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => a - b).reverse()[k - 1];
}

console.log({ findKthLargest: findKthLargest([3, 2, 1, 5, 6, 4], 2) });

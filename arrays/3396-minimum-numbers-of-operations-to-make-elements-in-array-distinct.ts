function minimumOperations(nums: number[]): number {
  let set = new Set(nums);
  let operations = 0;

  while (set.size !== nums.length) {
    nums.splice(0, 3);
    set = new Set(nums);
    operations++;
  }

  return operations;
}

console.log({
  minimumOperations: minimumOperations([4, 5, 6, 4, 4]),
});

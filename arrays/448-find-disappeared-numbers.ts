function findDisappearedNumbers(nums: number[]): number[] {
  const set = new Set(nums);

  const missingNums: number[] = [];
  for (let i = 1; i < nums.length + 1; i++) {
    if (!set.has(i)) {
      missingNums.push(i);
    }
  }

  return missingNums;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));

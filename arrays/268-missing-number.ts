function missingNumber(nums: number[]): number {
  return (
    Array.from(Array(nums.length + 1).keys()).reduce((t, n) => t + n) -
    nums.reduce((t, n) => t + n)
  );
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));

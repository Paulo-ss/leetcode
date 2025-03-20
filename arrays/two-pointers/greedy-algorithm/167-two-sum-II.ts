function twoSum(numbers: number[], target: number): number[] {
  if (numbers.length === 2 && numbers[0] + numbers[1] !== target) {
    return [];
  }

  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    if (numbers[l] + numbers[r] > target) {
      r--;
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }

  return [];
}

console.log({ twoSum: twoSum([2, 3, 4], 6) });

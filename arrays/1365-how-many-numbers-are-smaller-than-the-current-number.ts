function smallerNumbersThanCurrent(nums: number[]): number[] {
  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let amountOfGreaterNums = 0;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) {
        continue;
      }

      if (nums[j] < nums[i]) {
        amountOfGreaterNums++;
      }
    }

    result.push(amountOfGreaterNums);
  }

  return result;
}

function smallerNumbersThanCurrent2(nums: number[]): number[] {
  const sortedNums = Array.from(nums);
  sortedNums.sort((a, b) => a - b);

  const map = new Map<number, number>();

  for (let i = 0; i <= sortedNums.length; i++) {
    if (!map.has(sortedNums[i])) {
      map.set(sortedNums[i], i);
    }
  }

  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(map.get(nums[i])!);
  }

  return result;
}

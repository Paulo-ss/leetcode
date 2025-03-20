function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(start: number, subArr: number[]) {
    result.push([...subArr]);

    for (let i = start; i < nums.length; i++) {
      subArr.push(nums[i]);

      backtrack(i + 1, subArr);

      subArr.pop();
    }
  }

  backtrack(0, []);

  return result;
}

console.log({ subsets: subsets([1, 2, 3]) });

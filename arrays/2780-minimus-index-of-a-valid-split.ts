function minimumIndex2(nums: number[]): number {
  if (nums.length === 1) {
    return -1;
  }

  const map = new Map<number, number[]>();

  for (let i = 0; i < nums.length; i++) {
    map.has(nums[i]) ? map.get(nums[i])!.push(i) : map.set(nums[i], [i]);
  }

  let ocurrences: number[] = [];

  for (const [_, indexes] of map) {
    if (indexes.length > ocurrences.length) {
      ocurrences = indexes;
    }
  }

  for (let i = 0; i < ocurrences.length; i++) {
    const index = ocurrences[i];
    const firstSubArr = nums.slice(0, index + 1);
    const secondSubArr = nums.slice(index + 1);

    if (
      (i + 1) * 2 > firstSubArr.length &&
      (ocurrences.length - i - 1) * 2 > secondSubArr.length
    ) {
      return index;
    }
  }

  return -1;
}

function minimumIndex(nums: number[]): number {
  if (nums.length === 1) {
    return -1;
  }

  const map = new Map<number, number>();
  let maxCount = 0;
  let maxValue = 0;

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);

    if (map.get(nums[i])! > maxCount) {
      maxValue = nums[i];
      maxCount = map.get(nums[i])!;
    }
  }

  const n = nums.length;
  let ocurrences = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== maxValue) {
      continue;
    }

    ocurrences++;

    if (ocurrences * 2 > i + 1 && (maxCount - ocurrences) * 2 > n - i - 1) {
      return i;
    }
  }

  return -1;
}

console.log({ minimumIndex: minimumIndex([1, 3, 3, 3]) });

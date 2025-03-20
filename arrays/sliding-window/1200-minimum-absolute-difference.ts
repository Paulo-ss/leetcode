function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, Math.abs(arr[i] - arr[i - 1]));
  }

  const pairs: number[][] = [];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i - 1]) === minDiff) {
      pairs.push([arr[i - 1], arr[i]]);
    }
  }

  return pairs;
}

console.log({
  minimumAbsDifference: minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]),
});

// O(n log n) time complexity because de native sorting API
// in JS is n log n
function sortedSquares(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    nums.splice(i, 1, Math.pow(nums[i], 2));
  }

  nums.sort((a, b) => a - b);

  return nums;
}

// O(n) (linear) time complexity because since there's no
// nested loops, as the input size grows, the operation
// execution times increses linearlly - Split and Merge
function sortedSquaresImproved(nums: number[]): number[] {
  if (nums.length === 0) {
    return nums;
  }

  if (nums[0] >= 0) {
    return nums.map((num) => num ** 2);
  }

  let firstPositiveIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      firstPositiveIndex = i;
      break;
    }
  }

  const positiveArray = nums.slice(firstPositiveIndex);

  const negativeArray: number[] = [];
  for (let i = firstPositiveIndex - 1; i >= 0; i--) {
    negativeArray.push(nums[i] * -1);
  }

  function merge(A: number[], B: number[]): number[] {
    let a = 0;
    let b = 0;

    const result: number[] = [];

    while (a < A.length && b < B.length) {
      if (A[a] < B[b]) {
        result.push(A[a]);
        a++;
      } else {
        result.push(B[b]);
        b++;
      }
    }

    if (a < A.length) {
      result.push(...A.slice(a));
    } else {
      result.push(...B.slice(b));
    }

    return result.map((num) => num ** 2);
  }

  return merge(positiveArray, negativeArray);
}

// Most efficient solution using two pointer
// Time Complexity 0(n)
function sortedSquaresAbsoluteAndMerge(nums: number[]): number[] {
  const sortedSquared: number[] = [];

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    if (Math.abs(nums[leftPointer]) > Math.abs(nums[rightPointer])) {
      sortedSquared.push(nums[leftPointer] ** 2);
      leftPointer++;
    } else {
      sortedSquared.push(nums[rightPointer] ** 2);
      rightPointer--;
    }
  }

  return sortedSquared.reverse();
}

console.log(sortedSquaresAbsoluteAndMerge([-4, -1, 0, 3, 10]));

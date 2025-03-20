// Bit manipulation - ^ (Xor) operator
// returns 0 if both value ate the same, else returns 1
function singleNumber(nums: number[]): number {
  let missingNumber = 0;

  for (let i = 0; i < nums.length; i++) {
    missingNumber ^= nums[i];
  }

  return missingNumber;
}

console.log({ missing: singleNumber([4, 1, 2, 1, 2]) });

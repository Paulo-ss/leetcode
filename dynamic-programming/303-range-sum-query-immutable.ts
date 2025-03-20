class NumArray {
  private prefixSum: number[];

  constructor(private nums: number[]) {
    this.prefixSum = [this.nums[0]];

    for (let i = 1; i < nums.length; i++) {
      this.prefixSum.push(this.prefixSum[i - 1] + nums[i]);
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefixSum[right] + this.nums[left] - this.prefixSum[left];
  }
}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2);

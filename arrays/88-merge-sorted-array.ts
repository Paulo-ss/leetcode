function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (n === 0) {
    return;
  }

  if (m === 0) {
    nums1.splice(0, nums1.length, ...nums2);
    return;
  }

  nums1.splice(m, m + n, ...nums2);
  nums1.sort((a, b) => a - b);
}

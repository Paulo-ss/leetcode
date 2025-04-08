import TreeNode from "../binary-trees/TreeNode";

/*
  Time Complexity - O(N) Linear - iterates over the nums array
  Space Complexity - O(N) Linear - storing a BST with N (length of nums) nodes
  and a queue that holds up to N elements inside
*/
function sortedArrayToBST(nums: number[]): TreeNode | null {
  const n = nums.length;
  let middle = Math.floor(n / 2);
  const root = new TreeNode(nums[middle]);

  const queue: ([TreeNode, number, number] | null)[] = [];
  queue.push([root, 0, middle - 1]);
  queue.push([root, middle + 1, n - 1]);

  while (queue.length) {
    const [parent, left, right] = queue.shift()!;

    if (left <= right) {
      middle = Math.floor((left + right) / 2);

      const child = new TreeNode(nums[middle]);

      if (nums[middle] < parent.val) {
        parent.left = child;
      } else {
        parent.right = child;
      }

      queue.push([child, left, middle - 1]);
      queue.push([child, middle + 1, right]);
    }
  }

  return root;
}

console.log({
  sortedArrayToBST: sortedArrayToBST([-10, -3, 0, 5, 9]),
});

import TreeNode from "../binary-trees/TreeNode";

/*
  Binary Search Tree is a Data Structure, that uses a Binary Tree as a base,
  but all the left nodes, has a smaller value than it's parent, and every
  right node has a greater value than it's parent

  Time Complexity - O(N) Linear - iterates over all the nodes at the worst case
  Space Complexity - O(1) Constant - only keep track of the root variable
*/
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  while (root) {
    if (root && root.val === val) {
      return root;
    }

    if (root && root.val < val) {
      root = root.right;
    }

    if (root && root.val > val) {
      root = root.left;
    }
  }

  return null;
}

const fifth = new TreeNode(3);
const fourth = new TreeNode(1);
const third = new TreeNode(7);
const second = new TreeNode(2, fourth, fifth);
const root = new TreeNode(4, second, third);

console.log({
  searchBST: searchBST(root, 2),
});

import TreeNode from "../binary-trees/TreeNode";

/*
  Time Complexity - O(N) Linear - iterates over all the nodes at the worst case
  Space Complexity - O(1) Constant - only keeps track of the curr variable and the newNode
*/
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }

  let prev: TreeNode | null = root;
  let target: TreeNode | null = root;

  while (target && target.val !== key) {
    prev = target;

    if (key < target.val) {
      target = target.left;
    } else {
      target = target.right;
    }
  }

  if (!target) {
    return null;
  }

  // in case target is a leaf node, just delete it
  if (!target.left && !target.right) {
    if (target!.val < prev!.val) {
      prev!.left = null;
    } else {
      prev!.right = null;
    }
  }

  if (target.left || target.right) {
    if (target!.val < prev!.val) {
      target = target.right;
    } else {
      target = target.left;
    }
  }

  if (target?.left && target?.right) {
    if (target!.val < prev!.val) {
      target = target.right;
    } else {
      target = target.left;
    }
  }

  return root;
}

const sixth = new TreeNode(7);
const fifth = new TreeNode(4);
const fourth = new TreeNode(2);
const third = new TreeNode(6, null, sixth);
const second = new TreeNode(3, fourth, fifth);
const root = new TreeNode(5, second, third);

console.log({
  deleteNode: deleteNode(root, 3),
});

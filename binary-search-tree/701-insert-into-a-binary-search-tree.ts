import TreeNode from "../binary-trees/TreeNode";

/*
  Binary Search Tree is a Data Structure, that uses a Binary Tree as a base,
  but all the left nodes, has a smaller value than it's parent, and every
  right node has a greater value than it's parent

  Time Complexity - O(N) Linear - iterates over all the nodes at the worst case
  Space Complexity - O(1) Constant - only keeps track of the curr variable and the newNode
*/
function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  const newNode = new TreeNode(val);

  if (!root) {
    return newNode;
  }

  let curr = root;

  while (true) {
    if (val < curr.val) {
      if (curr.left) {
        curr = curr.left;
      } else {
        curr.left = newNode;
        break;
      }
    } else {
      if (curr.right) {
        curr = curr.right;
      } else {
        curr.right = newNode;
        break;
      }
    }
  }

  return root;
}

const fifth = new TreeNode(-1);
const fourth = new TreeNode(-3);
const third = new TreeNode(7);
const second = new TreeNode(-2, fourth, fifth);
const root = new TreeNode(4, second, third);

console.log({
  insertIntoBST: insertIntoBST(root, -5),
});

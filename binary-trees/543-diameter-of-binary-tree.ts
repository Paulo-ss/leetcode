import TreeNode from "./TreeNode";

/*
  Using a recursive solution to find the diameter of a binary tree.
  The diameter of a binary tree is the longest path between any two
  nodes on the tree.
*/
function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  function findDiameter(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const leftDepth = findDiameter(node.left);
    const rightDepth = findDiameter(node.right);

    diameter = Math.max(diameter, leftDepth + rightDepth);

    return 1 + Math.max(leftDepth, rightDepth);
  }

  findDiameter(root);

  return diameter;
}

const fifth = new TreeNode(5);
const fourth = new TreeNode(4);
const third = new TreeNode(3);
const second = new TreeNode(2, fourth, fifth);
const root = new TreeNode(1, second, third);

console.log({ diameterOfBinaryTree: diameterOfBinaryTree(root) });

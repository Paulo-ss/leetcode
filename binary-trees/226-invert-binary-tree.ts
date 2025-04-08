import TreeNode from "./TreeNode";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const stack: (TreeNode | null)[] = [root];

  while (stack.length) {
    const node = stack.pop()!;

    let right = node.right;
    let left = node.left;
    node.left = right;
    node.right = left;

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  return root;
}

const seventh = new TreeNode(9);
const sixth = new TreeNode(6);
const fifth = new TreeNode(3);
const fourth = new TreeNode(1);
const third = new TreeNode(7, sixth, seventh);
const second = new TreeNode(2, fourth, fifth);
const root = new TreeNode(4, second, third);

console.log({ invertTree: invertTree(root) });

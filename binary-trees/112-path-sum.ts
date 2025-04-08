import TreeNode from "./TreeNode";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  const stack: ([TreeNode, number] | null)[] = [[root, root.val]];

  while (stack.length) {
    const [node, value] = stack.pop()!;

    if (!node!.left && !node!.right && value === targetSum) {
      return true;
    }

    if (node!.right) stack.push([node!.right, value + node.right.val]);
    if (node!.left) stack.push([node!.left, value + node.left.val]);
  }

  return false;
}

const nineth = new TreeNode(1);
const eighth = new TreeNode(3);
const seventh = new TreeNode(7);
const sixth = new TreeNode(4, null, nineth);
const fifth = new TreeNode(13);
const fourth = new TreeNode(11, seventh, eighth);
const third = new TreeNode(8, fifth, sixth);
const second = new TreeNode(4, fourth);
const root = new TreeNode(5, second, third);

console.log({ hasPathSum: hasPathSum(root, 18) });

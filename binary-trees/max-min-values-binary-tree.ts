import TreeNode from "./TreeNode";

/*
  Time complexity O(N) Linear - N being the amount of nodes inside the tree
  Space complexity O(N) Linear - because, in the worst case scenario, the tree
  would be a perfect tree, meaning that the last level, has half the nodes of the tree,
  and O(N / 2), simplifies to O(N)
*/

function minValue(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue: ([TreeNode, number] | null)[] = [[root, 1]];
  let minValue = Infinity;

  while (queue.length) {
    const [node, level] = queue.shift()!;

    minValue = Math.min(minValue, node.val);

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return minValue;
}

function maxValue(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue: ([TreeNode, number] | null)[] = [[root, 1]];
  let minValue = -Infinity;

  while (queue.length) {
    const [node, level] = queue.shift()!;

    minValue = Math.max(minValue, node.val);

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return minValue;
}

const five = new TreeNode(7);
const four = new TreeNode(15);
const three = new TreeNode(20, four, five);
const two = new TreeNode(9);
const root = new TreeNode(3, two, three);

console.log({ min: minValue(root) });
console.log({ max: maxValue(root) });

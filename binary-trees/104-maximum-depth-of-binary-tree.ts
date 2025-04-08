import TreeNode from "./TreeNode";

/*
  Time complexity O(N) Linear - N being the amount of nodes inside the tree
  Space complexity O(N) Linear - because, in the worst case scenario, the tree
  would be a perfect tree, meaning that the last level, has half the nodes of the tree,
  and O(N / 2), simplifies to O(N)
*/

// using queue
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue: ([TreeNode, number] | null)[] = [[root, 1]];

  while (queue.length) {
    const [node, level] = queue.shift()!;

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }

    if (!node.left && !node.right && queue.length === 0) {
      return level;
    }
  }

  return 0;
}

// recursive solution
function maxDepthRecursive(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return (
    Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right)) + 1
  );
}

const five = new TreeNode(7);
const four = new TreeNode(15);
const three = new TreeNode(20, four, five);
const two = new TreeNode(9);
const root = new TreeNode(3, two, three);

console.log({ maxDepth: maxDepthRecursive(root) });

import TreeNode from "./TreeNode";

function minDepth(root: TreeNode | null): number {
  const queue: (TreeNode | null)[] = root ? [root] : [];
  let result = 0;

  if (root) {
    while (queue.length) {
      result++;

      const queueSize = queue.length;

      for (let i = 0; i < queueSize; i++) {
        const node = queue.shift();

        if (node) {
          if (!node.left && !node.right) {
            return result;
          }

          queue.push(node.left);
          queue.push(node.right);
        }
      }
    }
  }

  return result;
}

function minDepthWhile(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const queue: ([TreeNode, number] | null)[] = [[root, 1]];

  while (queue.length) {
    const [node, level] = queue.shift()!;

    if (!node.left && !node.right) {
      return level;
    }

    if (node.left) {
      queue.push([node.left, level + 1]);
    }

    if (node.right) {
      queue.push([node.right, level + 1]);
    }
  }

  return 0;
}

const five = new TreeNode(5);
const four = new TreeNode(4);
const three = new TreeNode(3);
const two = new TreeNode(2, four, five);
const root = new TreeNode(1, two, three);

console.log({ minDepth: minDepthWhile(root) });

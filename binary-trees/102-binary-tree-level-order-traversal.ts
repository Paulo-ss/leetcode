import TreeNode from "./TreeNode";

/*
  Time complexity O(N) Linear - N being the amount of nodes inside the tree
  Space complexity O(N) Linear - because, in the worst case scenario, the tree
  would be a perfect tree, meaning that the last level, has half the nodes of the tree,
  and O(N / 2), simplifies to O(N)
*/

// applying Breadth-First Search (BFS)
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const queue: ([TreeNode, number] | null)[] = [[root, 0]];
  const traversalOrder: number[][] = [];

  while (queue.length) {
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const [node, l] = queue.shift()!;

      const level = traversalOrder[l];
      traversalOrder[l] = level ? [...level, node.val] : [node.val];

      if (node.left) {
        queue.push([node.left, l + 1]);
      }

      if (node.right) {
        queue.push([node.right, l + 1]);
      }
    }
  }

  return traversalOrder;
}

const five = new TreeNode(7);
const four = new TreeNode(15);
const three = new TreeNode(20, four, five);
const two = new TreeNode(9);
const root = new TreeNode(3, two, three);

console.log({ levelOrder: levelOrder(root) });

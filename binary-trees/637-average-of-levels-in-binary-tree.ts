import TreeNode from "./TreeNode";

/*
  Most of the questions involving Binaty Trees, are gone involve
  Depth First Search (DFS) or Breadth First Search (BFS). They can both
  be implemented using recursion or queue (BFS) or stack (DFS)

  Time complexity O(N) Linear - N being the amount of nodes inside the tree
  Space complexity O(N) Linear - because, in the worst case scenario, the tree
  would be a perfect tree, meaning that the last level, has half the nodes of the tree,
  and O(N / 2), simplifies to O(N)
*/

// using recursion
function averageOfLevels(root: TreeNode | null): number[] {
  const levelsTotal: number[][] = [];

  function calculateLevelAverage(node: TreeNode | null, level: number) {
    if (node) {
      if (levelsTotal[level]) {
        const [total, nodes] = levelsTotal[level];
        levelsTotal[level] = [total + node.val, nodes + 1];
      } else {
        levelsTotal[level] = [node.val, 1];
      }

      if (node.left) {
        calculateLevelAverage(node.left, level + 1);
      }

      if (node.right) {
        calculateLevelAverage(node.right, level + 1);
      }
    }
  }

  calculateLevelAverage(root, 0);

  return levelsTotal.map(([total, nodes]) =>
    Number((total / nodes).toFixed(5))
  );
}

// using queue
function averageOfLevelsQueue(root: TreeNode | null): number[] {
  const queue: (TreeNode | null)[] = [root];
  const averages: number[] = [];

  while (queue.length) {
    const level: number[] = [];
    const queueSize = queue.length;

    for (let i = 0; i < queueSize; i++) {
      const node = queue.shift();

      if (node) {
        level.push(node?.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }

    if (level.length) {
      averages.push(level.reduce((t, a) => t + a) / level.length);
    }
  }

  return averages;
}

const seven = new TreeNode(7);
const fifteen = new TreeNode(15);
const twenty = new TreeNode(20, fifteen, seven);
const nine = new TreeNode(9);
const root = new TreeNode(3, nine, twenty);

console.log({ averageOfLevels: averageOfLevelsQueue(root) });

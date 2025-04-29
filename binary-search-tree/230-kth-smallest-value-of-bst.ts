import TreeNode from "../binary-trees/TreeNode";

/*
  Time Complexity - O(Log N) Because I use sorting
  Space Complexity - O(N) Both values array and the queue can store
  up to N (number of nodes in the tree) elements
*/
function kthSmallest(root: TreeNode | null, k: number): number {
  const values: number[] = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.pop()!;
    values.push(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  values.sort((a, b) => a - b);

  return values[k - 1];
}

/*
  Time Complexity - O(N) Iterate over all the nodes in the tree
  Space Complexity - O(N) The stack can store up to N (nodes in the tree) elements
*/
function kthSmallestInOrderTraversal(root: TreeNode | null, k: number): number {
  const stack = [root];

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop()!;
      k--;

      if (k === 0) {
        return root.val;
      }

      root = root.right;
    }
  }

  return 0;
}

const fourth = new TreeNode(2);
const third = new TreeNode(4);
const second = new TreeNode(1, null, fourth);
const root = new TreeNode(3, second, third);

console.log({
  kthSmallest: kthSmallest(root, 1),
});

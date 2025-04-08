import TreeNode from "../binary-trees/TreeNode";

/*
  Perform an inorder traversal (from the smallest element to the biggest one)
  to create an sorted array of all the nodes
*/
function getBSTArray(root: TreeNode | null) {
  const nodes: number[] = [];
  const stack: (TreeNode | null)[] = [];
  let curr = root;

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop()!;
    nodes.push(curr.val);
    curr = curr.right;
  }

  return nodes;
}

function balanceBST(root: TreeNode | null): TreeNode | null {
  const sortedNodes = getBSTArray(root);
  const n = sortedNodes.length;
  let middle = Math.floor(n / 2);
  const newRoot = new TreeNode(sortedNodes[middle]);

  const queue: ([TreeNode, number, number] | null)[] = [];
  queue.push([newRoot, 0, middle - 1]);
  queue.push([newRoot, middle + 1, n - 1]);

  while (queue.length) {
    const [parent, left, right] = queue.shift()!;

    if (left <= right) {
      middle = Math.floor((left + right) / 2);

      const child = new TreeNode(sortedNodes[middle]);

      if (sortedNodes[middle] < parent.val) {
        parent.left = child;
      } else {
        parent.right = child;
      }

      queue.push([child, left, middle - 1]);
      queue.push([child, middle + 1, right]);
    }
  }

  return newRoot;
}

const fourth = new TreeNode(4);
const third = new TreeNode(3, null, fourth);
const second = new TreeNode(2, null, third);
const root = new TreeNode(1, null, second);

console.log({
  balanceBST: balanceBST(root),
});

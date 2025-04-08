import TreeNode from "../binary-trees/TreeNode";

/*
  This solution performs and in order traversal in the tree. Since in a BST, the left element
  is always gonna be smaller than it's parent, the traversal starts going all the down to the
  left most (smallest) node in the tree, and from there, it starts going up again, in order,
  always to the next bigger element (to the right), keeping track of the previous value (so every
  node get compared against every other node in the tree).

  Time complexity: O(N) Linear - N is the amount of nodes inside the ree

  Space complexity: O(N) Linear - stores a stack that might contain N elements (tree nodes)
*/
function getMinimumDifference(root: TreeNode | null): number {
  const stack: (TreeNode | null)[] = [];
  let minAbsDiff = Infinity;
  let prevVal = -Infinity;

  while (root || stack.length) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      root = stack.pop()!;
      minAbsDiff = Math.min(minAbsDiff, Math.abs(root.val - prevVal));
      prevVal = root.val;
      root = root.right;
    }
  }

  return minAbsDiff;
}

const fifth = new TreeNode(911);
const fourth = new TreeNode(227);
const third = new TreeNode(701, null, fifth);
const second = new TreeNode(104, null, fourth);
const root = new TreeNode(236, second, third);

console.log({
  getMinimumDifference: getMinimumDifference(root),
});

import TreeNode from "../binary-trees/TreeNode";

/*
  Time complexity: O(H) Linear - H is the height of the tree, and the while loop my go all
  the way down to the deepest level on the tree.

  Space complexity: O(1) Constant - only keeping track of the root variable, and creating
  the small and large variables, no mater the size o the input (tree)
*/
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const small = Math.min(p!.val, q!.val);
  const large = Math.max(p!.val, q!.val);

  while (root) {
    if (root.val > large) {
      root = root.left;
    } else if (root.val < small) {
      root = root.right;
    } else {
      return root;
    }
  }

  return null;
}

const nineth = new TreeNode(5);
const eighth = new TreeNode(3);
const seventh = new TreeNode(9);
const sixth = new TreeNode(7);
const fifth = new TreeNode(4, eighth, nineth);
const fourth = new TreeNode(0);
const third = new TreeNode(8, sixth, seventh);
const second = new TreeNode(2, fourth, fifth);
const root = new TreeNode(6, second, third);

console.log({
  lowestCommonAncestor: lowestCommonAncestor(root, eighth, nineth),
});

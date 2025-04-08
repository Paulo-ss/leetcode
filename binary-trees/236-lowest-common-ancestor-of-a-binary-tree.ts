import TreeNode from "./TreeNode";

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const queue: (TreeNode | null)[] = [root];
  const parent = new Map<number, TreeNode | null>();
  parent.set(root!.val, null);

  while (queue.length) {
    const node = queue.shift();

    if (node?.left) {
      queue.push(node.left);
      parent.set(node.left.val, node);
    }

    if (node?.right) {
      queue.push(node.right);
      parent.set(node.right.val, node);
    }

    if (parent.has(p!.val) && parent.has(q!.val)) {
      break;
    }
  }

  const ancestors = new Set<number>();

  while (p) {
    ancestors.add(p.val);
    p = parent.get(p.val)!;
  }

  while (q) {
    if (ancestors.has(q.val)) {
      return q;
    }

    q = parent.get(q.val)!;
  }

  return null;
}

const nineth = new TreeNode(4);
const eighth = new TreeNode(7);
const seventh = new TreeNode(8);
const sixth = new TreeNode(0);
const fifth = new TreeNode(2, eighth, nineth);
const fourth = new TreeNode(6);
const third = new TreeNode(1, sixth, seventh);
const second = new TreeNode(5, fourth, fifth);
const root = new TreeNode(3, second, third);

console.log({
  lowestCommonAncestor: lowestCommonAncestor(root, second, nineth),
});

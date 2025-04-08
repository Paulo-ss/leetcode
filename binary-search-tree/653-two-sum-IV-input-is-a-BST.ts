import TreeNode from "../binary-trees/TreeNode";

function findTarget(root: TreeNode | null, k: number): boolean {
  if (!root) {
    return false;
  }

  const queue: (TreeNode | null)[] = [root];
  const set = new Set<number>();

  while (queue.length) {
    const node = queue.shift()!;

    if (set.has(k - node.val)) {
      return true;
    }

    set.add(node.val);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return false;
}

const sixth = new TreeNode(7);
const fifth = new TreeNode(4);
const fourth = new TreeNode(-2);
const third = new TreeNode(6, null, sixth);
const second = new TreeNode(3, fourth, fifth);
const root = new TreeNode(5, second, third);

console.log({
  findTarget: findTarget(root, 5),
});

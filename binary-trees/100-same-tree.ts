import TreeNode from "./TreeNode";

/*
  Breadth-First Search (BFS)

  Time complexity O(N) Linear - N being the amount of nodes inside the tree
  Space complexity O(N) Linear - because, in the worst case scenario, the tree
  would be a perfect tree, meaning that the last level, has half the nodes of the tree,
  and O(N / 2), which simplifies to O(N)
*/
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p || !q) {
    return false;
  }

  let isSame = true;

  const pQueue: (TreeNode | null)[] = [p];
  const qQueue: (TreeNode | null)[] = [q];

  while (pQueue.length || qQueue.length) {
    const pNode = pQueue.shift();
    const qNode = qQueue.shift();

    if (!pNode && !qNode) {
      continue;
    } else if (!pNode || !qNode || pNode.val !== qNode.val) {
      return false;
    }

    pQueue.push(pNode.left);
    pQueue.push(pNode.right);
    qQueue.push(qNode.left);
    qQueue.push(qNode.right);
  }

  return isSame;
}

/* 
  Depth-First Search (DFS) 

  Time complexity O(N) Linear - N being the amount of nodes inside the tree
  Space complexity O(H) Linear - H being the height of the tree, because, 
  with DFS, on the worst case, we are going all the way down to the last
  level of the tree
*/
function isSameTreeDFS(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p || !q) {
    return false;
  }

  let isSame = true;

  const stack: ((TreeNode | null)[] | null)[] = [[p, q]];

  while (stack.length) {
    const [pNode, qNode] = stack.pop()!;

    if (!pNode && !qNode) {
      continue;
    } else if (!pNode || !qNode || pNode.val !== qNode.val) {
      return false;
    }

    stack.push([pNode.right, qNode.right]);
    stack.push([pNode.left, qNode.left]);
  }

  return isSame;
}

const thirdOne = new TreeNode(3);
const secondOne = new TreeNode(2);
const rootOne = new TreeNode(1, secondOne);

const thirdSecond = new TreeNode(3);
const secondSecond = new TreeNode(2);
const rootSecond = new TreeNode(1, null, secondSecond);

console.log({ isSameTree: isSameTreeDFS(rootOne, rootSecond) });

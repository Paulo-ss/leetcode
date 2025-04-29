import TreeNode from "../binary-trees/TreeNode";

/*
  Time Complexity - O(N) Linear - iterates over all the nodes at the worst case
  Space Complexity - O(1) Constant - only keeps track of the curr variable and the newNode
*/
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) {
    return null;
  }

  let prev: TreeNode | null = null;
  let target: TreeNode | null = root;

  while (target && target.val !== key) {
    prev = target;

    if (key < target.val) {
      target = target.left;
    } else {
      target = target.right;
    }
  }

  if (!target) {
    return root;
  }

  // in case target is a leaf node, just delete it
  if (!target.left && !target.right) {
    if (!prev) {
      return null;
    }

    if (prev.left === target) {
      prev!.left = null;
    } else {
      prev!.right = null;
    }
  } else if (!target.left || !target.right) {
    let child = target.left ?? target.right;

    if (!prev) {
      return child;
    }

    if (prev.left === target) {
      prev.left = child;
    } else {
      prev.right = child;
    }
  } else {
    let successorParent = target;
    let successor = target.right;

    while (successor.left) {
      successorParent = successor;
      successor = successor.left;
    }

    target.val = successor.val;

    if (successorParent.left === successor) {
      successorParent.left = successor.right;
    } else {
      successorParent.right = successor.right;
    }
  }

  return root;
}

// const sixth = new TreeNode(7);
// const fifth = new TreeNode(4);
// const fourth = new TreeNode(2);
const third = new TreeNode(3);
const second = new TreeNode(1);
const root = new TreeNode(2, second, third);

console.log({
  deleteNode: deleteNode(root, 1),
});

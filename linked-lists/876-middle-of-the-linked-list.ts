import ListNode from "./ListNode";

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let leftNode: ListNode | null = head;
  let rightNode: ListNode | null | undefined = head.next;

  if (rightNode) {
    while (rightNode) {
      leftNode = leftNode!.next;
      rightNode = rightNode?.next?.next;
    }
  }

  return leftNode;
}

const sixthNode = new ListNode(6);
const fifthNode = new ListNode(5, sixthNode);
const fourthNode = new ListNode(4, fifthNode);
const thirdNode = new ListNode(3, fourthNode);
const secondNode = new ListNode(2, thirdNode);
const headNode = new ListNode(1, secondNode);

console.log({ middleNode: middleNode(headNode) });

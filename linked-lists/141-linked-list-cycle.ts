import ListNode from "./ListNode";

function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null | undefined = head;
  let fast = head?.next;

  while (fast) {
    if (slow === fast) {
      return true;
    }

    slow = slow?.next;
    fast = fast?.next?.next;
  }

  return false;
}

const fourthNode = new ListNode(-4);
const thirdNode = new ListNode(0, fourthNode);
const secondNode = new ListNode(2, thirdNode);
const headNode = new ListNode(3, secondNode);

// fourthNode.next = secondNode;

console.log({ hasCycle: hasCycle(headNode) });

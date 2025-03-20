import ListNode from "./ListNode";

/*
  Time complexity: 0(N) Linear - only one loop through the list
  Space complexity: 0(1) Contant - because i'm only keeping track of two variables
*/
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }

  let prev: ListNode | null = null;
  let curr: ListNode | null = head;

  if (!curr.next && curr.val === val) {
    return null;
  }

  while (curr?.next) {
    if (curr.val === val) {
      if (!prev) {
        head = curr.next;
        curr = head;

        if (!curr.next && curr.val === val) {
          head = null;
        }
      } else {
        curr = curr.next;
        prev.next = curr;

        if (!curr.next && curr.val === val) {
          prev.next = null;
        }
      }
    } else {
      prev = curr;
      curr = curr.next;

      if (!curr.next && curr.val === val) {
        prev.next = null;
      }
    }
  }

  return head;
}

function removeElementsImproved(
  head: ListNode | null,
  val: number
): ListNode | null {
  const dummyHead = new ListNode(-1, head);
  let curr: ListNode | null = dummyHead;

  while (curr?.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummyHead.next;
}

const sixthNode = new ListNode(1);
const fifthNode = new ListNode(1, sixthNode);
const fourthNode = new ListNode(2, fifthNode);
const thirdNode = new ListNode(3, fourthNode);
const secondNode = new ListNode(4, thirdNode);
const headNode = new ListNode(5, secondNode);

console.log({ removeElements: removeElementsImproved(headNode, 1) });

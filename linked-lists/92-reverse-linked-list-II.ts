import ListNode from "./ListNode";

/*
  Time complexity: 0(N) Linear - despite having two for loops, there's no nested loops
  Space complexity: 0(1) Contant - because i'm only keeping track of five variables,
  no matter how big the linked list is
*/
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const dummyHead = new ListNode(-1, head);

  let leftPrev: ListNode | null | undefined = dummyHead;
  let curr: ListNode | null | undefined = head;

  for (let i = 0; i < left - 1; i++) {
    leftPrev = curr;
    curr = curr?.next;
  }

  let prev: ListNode | null | undefined = null;

  for (let i = 0; i < right - left + 1; i++) {
    let next = curr?.next;

    if (curr) {
      curr.next = prev ?? null;
    }

    prev = curr;
    curr = next;
  }

  leftPrev!.next!.next = curr ?? null;
  leftPrev!.next = prev ?? null;

  return dummyHead.next;
}

const fifthNode = new ListNode(5);
const fourthNode = new ListNode(4, fifthNode);
const thirdNode = new ListNode(3, fourthNode);
const secondNode = new ListNode(2, thirdNode);
const headNode = new ListNode(1, secondNode);

console.log({ reverseBetween: reverseBetween(headNode, 2, 4) });

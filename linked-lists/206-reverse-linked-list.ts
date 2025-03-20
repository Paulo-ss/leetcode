import ListNode from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  let next = head?.next;

  while (curr) {
    // updated the next pointer to be equal to the next node of the current node
    next = curr.next;

    // updates the link of the current node to be equal to the previous node
    curr.next = prev;

    // updated the previous node to be equal to the current node
    prev = curr;

    // the current node is now the initial next node (old curr.next link)
    curr = next;
  }

  head = prev;

  return head;
}

function reverseListRecursively(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  function recursive(prev: ListNode | null, curr: ListNode | null) {
    if (curr) {
      // updated the next pointer to be equal to the next node of the current node
      let next = curr.next;

      // updates the link of the current node to be equal to the previous node
      curr.next = prev;

      // updated the previous node to be equal to the current node
      prev = curr;

      // the current node is now the initial next node (old curr.next link)
      curr = next;

      recursive(prev, curr);
    } else {
      head = prev;
    }
  }

  recursive(prev, curr);

  return head;
}

const fifthNode = new ListNode(5);
const fourthNode = new ListNode(4, fifthNode);
const thirdNode = new ListNode(3, fourthNode);
const secondNode = new ListNode(2, thirdNode);
const headNode = new ListNode(1, secondNode);

// console.log({ reverseList: reverseList(headNode) });
console.log({ reverseList: reverseListRecursively(headNode) });

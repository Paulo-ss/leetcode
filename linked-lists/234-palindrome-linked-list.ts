import ListNode from "./ListNode";

/*
  Time complexity: 0(N) Linear - iterates over the list twice with no nested loops
  Space complexity: 0(N) Linear - since we are storing the listElements, the memory
  space usage is be as big as the list size (n)
*/
function isPalindrome(head: ListNode | null): boolean {
  const listElements: number[] = [];

  let curr: ListNode | null = new ListNode(head?.val, head?.next);

  while (curr) {
    listElements.push(curr.val);
    curr = curr.next;
  }

  curr = head;
  let prev: ListNode | null = null;

  while (curr) {
    let next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let i = 0;
  while (prev) {
    if (listElements[i] !== prev.val) {
      return false;
    }

    i++;
    prev = prev.next;
  }

  return true;
}

/*
  A more efficient solutions, with O(1) Constant time complexity,
  apllying multiple concepts at onde (slow and fast pointer, reversing
  a linked list)
*/
function isPalindromeImproved(head: ListNode | null): boolean {
  let slowPointer = head;
  let fastPointer = head;

  // once this loops ends, the slowPointer is gonna point
  // to the middle of the linked list, which, is the case of a
  // palindrome, represents the other half
  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer ? slowPointer.next : null;
    fastPointer = fastPointer.next.next;
  }

  // reversing only the second half of the linked list
  let prev: ListNode | null = null;

  while (slowPointer) {
    let next = slowPointer.next;
    slowPointer.next = prev;
    prev = slowPointer;
    slowPointer = next;
  }

  let leftPointer = head;
  let rightPointer = prev; // the prev pointer, after reversing the linked list, now points to the end of the list

  // now, with two pointer, the left at the head of the list, and the right
  // at the tail, we begin iterating over the list, and if the values of the
  // left and right pointer are different, that means the list is not a palindrome
  while (rightPointer) {
    if (leftPointer?.val !== rightPointer.val) {
      return false;
    }

    leftPointer = leftPointer ? leftPointer!.next : null;
    rightPointer = rightPointer.next;
  }

  return true;
}

const sixthNode = new ListNode(1);
const fifthNode = new ListNode(0, sixthNode);
const fourthNode = new ListNode(3, fifthNode);
const thirdNode = new ListNode(3, fourthNode);
const secondNode = new ListNode(0, thirdNode);
const headNode = new ListNode(1, secondNode);

console.log({ isPalindrome: isPalindromeImproved(headNode) });

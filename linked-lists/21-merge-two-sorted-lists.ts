import ListNode from "./ListNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let curr = new ListNode();
  let dummyHead = curr;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      curr = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      curr = list2;
      list2 = list2.next;
    }
  }

  if (list1 || list2) {
    curr.next = list1 ?? list2;
  }

  return dummyHead.next;
}

const thirdNodeList1 = new ListNode(4);
const secondNodeList1 = new ListNode(2, thirdNodeList1);
const headNodeList1 = new ListNode(1, secondNodeList1);

const thirdNodeList2 = new ListNode(4);
const secondNodeList2 = new ListNode(3, thirdNodeList2);
const headNodeList2 = new ListNode(1, secondNodeList2);

console.log({ mergeTwoLists: mergeTwoLists(headNodeList1, headNodeList2) });

/*
2. Add Two Numbers
https://leetcode.com/problems/add-two-numbers/
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let previousNode = new ListNode();
  let headNode = previousNode;
  while (l1 || l2 || carry) {
    let firstDigit = 0;
    let secondDigit = 0;
    if (l1) {
      firstDigit = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      secondDigit = l2.val;
      l2 = l2.next;
    }

    let summary = firstDigit + secondDigit + carry;

    carry = Math.floor(summary / 10);

    let capacityDigit = summary % 10;
    currentNode = new ListNode(capacityDigit);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }

  return headNode.next;
};

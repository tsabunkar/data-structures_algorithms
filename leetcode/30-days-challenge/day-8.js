/**
 *  !Middle of the Linked List
 *
 * Given a non-empty, singly linked list with head node head,
 *  return a middle node of linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * ------------
 * Input: [1,2,3,4,5] ==> Output: Node 3 from this list
 *
 * The returned node has value 3.  (The judge's serialization of this node
 *  is [3,4,5]). Note that we returned a ListNode object ans, such that:
 *  ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and
 *  ans.next.next.next = NULL
 * -------------
 *
 * Input: [1,2,3,4,5,6] ==> Output: Node 4 from this list (Serialization: [4,5,6])
 * Since the list has two middle nodes with values 3 and 4, we return the
 * second one.
 *
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  head = initializeNodesFromArray(head);

  // Think that complete list/array is already present inside nodes, above head is the first
  // node of that singly linked list.
  const initialHeadNode = head; // creating the copy of the head Node
  let listSize = 0;

  while (head !== null) {
    head = head.next;
    listSize++;
  }
  console.log('listSize is -> ', listSize);

  head = initialHeadNode;

  // ! floor() -> round to  previous whole number
  // ! ceil() -> rounds to next largest whole number
  // ! round() -> round to nearest whole no
  for (let i = 0; i < Math.floor(listSize / 2); i++) {
    head = head.next;
  }

  return head;
};

// Node Class, Class -> function in js
function ListNode(val) {
  this.val = val;
  this.next = null;

  // toString(){
  //   return `Current node value is ${this.val}, next node value is ${this.next.val}`;
  // }
}

ListNode.prototype.toString = function () {
  return `Current node value is ${this.val}, next node value is ${this.next.val}`;
};
// !Above code is -> constructor function may be converted to a class declaration as below
/* 
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
 */

function initializeNodesFromArray(arr) {
  // let currentNode;
  // let nextNode;

  this.currentNode = new ListNode(arr[0]); // current node value got initialize with first element of arr
  const initialHeadNode = this.currentNode;
  // nextNode = currentNode.next;
  // !instead of assigning to another variable, use same variable
  this.currentNode = this.currentNode.next;

  for (let i = 1; i < arr.length; i++) {
    this.currentNode = new ListNode(arr[i]);
    this.currentNode.next = this.currentNode; // creating the reference between two nodes
    console.log(this.currentNode.toString());
  }

  // reseting back the first node
  // this.currentNode = initialHeadNode;

  console.log(
    'Reseting back -> ',
    this.currentNode,
    'Next Node: ',
    this.currentNode.next
  );

  return this.currentNode;
}

console.log(middleNode([1, 2, 3, 4, 5]));

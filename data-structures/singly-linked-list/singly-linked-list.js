// piece of data - val
// Reference to next ndoe - next

class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Your ds will look like -

/* 
let first = new Node('Tejas');
first.next = new Node('Shailesh');
first.next.next = new Node('Sabunkar');
 */

class SinglyLinkedList {
  head;
  tail;
  length;

  constructor() {
    // Wkt, linked list has head, tail and length
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push pseudo code:
   * - This function shld accept a value
   * - Create a new node using the value passed to the function
   * - If there is no head property on the list, set the head and tail to be the newly created node.
   * - Otherwise set the next property on the tail to be the new node and set the tail property on the
   *   list to be the newly created node
   * - Increment the length by one
   *
   */
  push(value) {}
}

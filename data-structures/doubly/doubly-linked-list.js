const { parse, stringify } = require('flatted/cjs');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Push pseudocode
   * - Create a new node with the value passed to the function
   * - If the head property is null set the head and tail to be newly created node
   * - If not, set the next property on the tail to be that node
   * - Set the previous property on the newly created node to be the tail
   * - Set the tail to be the newly create node
   * - Increment the length
   * - Return the doubly linked list
   */
  push(newValue) {
    let newNode = new Node(newValue);
    if (this.head === null || this.length === 0) {
      // No element/node is present in the list
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  /**
   * Popping pseudocode:
   * - If there is no head, retrun undefined
   * - Store the current tail in a variable to return later
   * - If the length is 1, set the head and tail to be null
   * - Update the tail to be the previous Node
   * - Set the newTail's next to null
   * - Decrement the length
   * - Return the value removed
   */
  pop() {
    if (this.head === null || this.length === 0) {
      return undefined;
    }
    let tailToBeRemoved = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tailToBeRemoved.prev;
      this.tail.next = null;
      tailToBeRemoved.prev = null; // old tail previous should be removed so that there is no connection at all
    }
    this.length--;
    return tailToBeRemoved;
  }

  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

let doublyList = new DoublyLinkedList();
doublyList.push(48);
doublyList.push(100);
doublyList.push(2);
// console.log(stringify(doublyList));

console.log(doublyList.print());

console.log('_________POP____________');

console.log(doublyList.pop());
console.log(doublyList.print());

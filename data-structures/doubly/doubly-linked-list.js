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

  /**
   * Shift pseudocode :
   * - If the length is 0, return undefined
   * - Store the current head property in a variable (we'll call it old head)
   * - If the length is one
   *    - Set the head and tail to be null
   * - Update the head to be the next of the old head
   * - Set the head's prev property to null
   * - Set the old head's next to null
   * - Decrement the length
   * - Return old head
   */
  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  /**
   * Unshift pusedocode:
   * - Create a new node with the value passed to the func
   * - If the length is 0
   *  - Set the head to be new Node
   *  - Set the tail to be new node
   * - Otherwise
   *  - Set the prev property on the head of the list to be the new node
   *  - Set the next property on the new node to be the head property
   *  - Update the head to be the new node
   * - Increment the length
   * - Return the list
   */

  unshift(newNodeValue) {
    let node = new Node(newNodeValue);
    if (this.length === 0) {
      this.head = this.tail = node;
    } else {
      /*  let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
      this.head.prev = null;
      oldHead.prev = this.head; */
      // ------or------
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
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

/* console.log('_________POP____________');

console.log(doublyList.pop());
console.log(doublyList.print()); */

/* console.log('________SHIFT__________');

console.log(doublyList.shift());
console.log('----');
console.log(doublyList.print()); */

console.log('________UNSHIFT__________');

console.log(doublyList.unshift(45));
console.log('----');
console.log(doublyList.print());

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

  /**
   * Get pseudocode:
   * - If the index is less than 0 or greater or equal to the length , return null
   * - If the index is less than or equal to half the length of the list
   *  - Loop thorugh the list starting from the head and loop towards the middle
   *  - Return the node once it is found
   * - If the index is greater than half the length of the list
   *  - Loop through the list starting from the tail and loop towards the middle
   *  - Return the node once it is found
   */
  get(indexToFind) {
    if (indexToFind < 0 || indexToFind >= this.length) {
      return null;
    }

    if (indexToFind <= this.length / 2) {
      let counter = 0;
      let currentHead = this.head;
      while (counter !== indexToFind) {
        counter++;
        currentHead = currentHead.next;
      }
      return currentHead;
    } else {
      let counter = this.length - 1;
      let currentTail = this.tail;
      while (counter !== indexToFind) {
        counter--;
        currentTail = currentTail.prev;
      }
      return currentTail;
    }
  }

  /**
   * Set pseudocode:
   * - Create a variable which is the result of the get method at the index passed to the function
   * - If the get method return a valid node, set the value of that node to be the value passed to the func
   * - Return true
   * - Otherwise return false
   */

  set(index, newValue) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = newValue;
      return true;
    }
    return false;
  }

  /**
   * Insert psuedocode:
   * - If the index is less than zero or greater than or equal to the length return false
   * - If the index is 0, unshift
   * - If the index is the same as the length, push
   * - Use the get method to access the index-1
   * - Set the next and prev properties on the correct nodes to link everything together
   * - Increment the length
   * - Return true
   */
  insert(indexToInsert, valueToInsert) {
    if (indexToInsert < 0 || indexToInsert > this.length) {
      return false;
    }
    if (indexToInsert === 0) {
      return !!this.unshift(valueToInsert);
    }
    if (indexToInsert === this.length) {
      return !!this.push(valueToInsert);
    }

    let prevFoundNode = this.get(indexToInsert - 1);
    let newNode = new Node(valueToInsert);
    let afterNode = prevFoundNode.next;

    prevFoundNode.next = newNode;
    newNode.prev = prevFoundNode;

    afterNode.prev = newNode;
    newNode.next = afterNode;

    this.length++;
    return true;
  }

  /**
   * Remove psuedocode :
   * - If the index is less than zero or greater than or equal to the length return undefined
   * - If the index is 0, shift
   * - If the index is the same as the lenght-1, pop
   * - Use the get method to retrieve the item to be removed
   * - UPdate the next and prev properties to remove the found node from the list
   * - Set next and prev to null on the found node
   * - Decrement the length
   * - return the removed node
   */

  remove(indexToRemove) {
    if (indexToRemove < 0 || indexToRemove >= this.length) {
      return undefined;
    }
    if (indexToRemove === 0) {
      return this.shift();
    }
    if (indexToRemove === this.length - 1) {
      return this.pop();
    }
    let nodeToRemove = this.get(indexToRemove);
    let beforeNode = nodeToRemove.prev;
    let afterNode = nodeToRemove.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    this.length--;
    return nodeToRemove;
  }

  /**Display the doubly linked list */
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
doublyList.push(22);
doublyList.push(56);
doublyList.push(77);
// console.log(stringify(doublyList));

console.log(doublyList.print());

/* console.log('_________POP____________');

console.log(doublyList.pop());
console.log(doublyList.print()); */

/* console.log('________SHIFT__________');

console.log(doublyList.shift());
console.log('----');
console.log(doublyList.print()); */

/* console.log('________UNSHIFT__________');

console.log(doublyList.unshift(45));
console.log('----');
console.log(doublyList.print());
 */

/* console.log('________GET__________');

console.log(doublyList.get(1)); */

/* console.log('________SET__________');

console.log(doublyList.set(2, 344));
console.log(doublyList.print());
console.log(doublyList.get(2)); */

/* console.log('________INSERT__________');
console.log(doublyList.insert(2, 344));
console.log(doublyList.print());
 */

/* console.log('________REMOVE__________');
console.log(doublyList.remove(2));
console.log(doublyList.print());
 */

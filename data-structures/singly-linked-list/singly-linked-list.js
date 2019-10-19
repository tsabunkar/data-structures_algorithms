// piece of data - val
// Reference to next ndoe - next

class Node {
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
  push(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.head = this.tail = node;
    } else {
      this.tail.next = node; // next property in the tail is set to new node
      this.tail = node; // tail property is set to newly created node.
    }

    this.length++;
    return this;
  }

  traverse() {
    // travers all the node in list
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  /**
   * Poping pseudocode:
   * - If there are no nodes in the list, return undefined
   * - Loop through the list untill you reach the tail
   * - Set the next property of the 2nd to last node to be null
   * - Set the tail to be the 2nd to last node
   * - Decrement the length of the list by 1
   * - Return the value of the node removed
   */
  pop() {
    if (this.length === 0 || !this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current; // 2nd to last node

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail; // Tail value is set to 2nd last poistion node value
    this.tail.next = null; // de-referencing the last node
    this.length--;
    if (this.length === 0 && this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /**
   * Shifting pseudocode:
   * - If there are no nodes, return undefined
   * - Store the current head property in a variable
   * - Set the head property to be the current head's next property
   * - Decrement the length by 1
   * - Return the value of the node removed
   */

  shift() {
    if (this.length === 0) {
      return undefined;
    }
    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0 && this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }
    return oldHead;
  }

  /**
   * Unshift pseudo code :
   * - The function should accept a value
   * - Create a new node using the value passed to the function
   * - If there is no head property on the list, set the head and tail to be the newly created node
   * - Otherwise set the newly create node's next property to be the current head property on the list
   * - Set the head property on the list to be that newly created node
   * - Increment the length of the list by 1
   * - Return the linked list
   */
  unshift(value) {
    let newNode = new Node(value);
    if (!this.head) {
      /* this.head = newNode;
      this.tail = newNode; */
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode; // Setting head to be new Node value
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('HI');
list.push('hello there');
list.push('I am Tejas Sabunkar');

console.log(JSON.stringify(list));
// !Traversing through all the nodes
/* list.traverse(); */

/* console.log('________poping___________');
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(JSON.stringify(list)); */

/* console.log('_______shifting_______');
console.log(list.shift());

console.log(JSON.stringify(list)); */

console.log('_______unshifting_______');
console.log(list.unshift('BROO'));
console.log(JSON.stringify(list));
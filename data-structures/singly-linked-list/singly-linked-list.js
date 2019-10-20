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

  /**
   * Get pseudocode:-
   * - This function should accept an index
   * - if the index is less than zero or greater than or equal to the length of the list, return null
   * - Loop through the list untill you reach the index and return the node at that specific index
   */
  get(indexPosition) {
    if (indexPosition < 0 || indexPosition >= this.length) {
      return null;
    }
    let counter = 0;
    let currentHead = this.head;

    while (counter !== indexPosition) {
      currentHead = currentHead.next;
      counter++;
    }
    // Return the node
    return currentHead;
  }

  /**
   * Set pseudocode:
   * - This function should accept a value and an index
   * - Use your get function to find the specific node
   * - If the node is not found, return the false
   * - If the node is found, set the value of the node to be the value passed to the function and return true
   */
  set(newValue, index) {
    let foundNode = this.get(index);
    if (!foundNode) {
      return false;
    }
    foundNode.value = newValue;
    return true;
  }
  /**
   * Insert pseudocode:
   * - If the index is less than zero or greater than the length, return false
   * - If the index is the same as the length , push a new node to the end of the list
   * - If the index is 0, unshift a new node to the start of the list
   * - Otherwise, using the get method, access the node at the (index-1)
   * - Set the next property on that node to be the new node
   * - Set the next property on the new node to be the previous next
   * - Increment the length
   * - Return true
   */
  insert(poistion, newNodeValue) {
    if (poistion < 0 || poistion > this.length) {
      return false;
    }
    if (poistion === this.length) {
      this.push(newNodeValue);
      return true;
    }
    if (poistion === 0) {
      /*   this.unshift(newNodeValue);
      return true; */
      // !Above code can be written -> Using trughty technqiue
      return !!this.unshift(newNodeValue);
    }
    let previousNode = this.get(poistion - 1);
    let newNode = new Node(newNodeValue);
    let temp = previousNode.next;

    previousNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  /**
   * Remove pseudocode:
   * - If the index is less than zero or greater than the length return undefined.
   * - If the index is the same as the length-1, pop
   * - If the index is 0, shift
   * - Otherwise, using the get method, access the node at the index-1
   * - Set the next property on that node to be the next of the next node.
   * - Decrement the length
   * - Return the value of the node removed
   */

  remove(poistion) {
    if (poistion < 0 || poistion >= this.length) {
      return undefined;
    }
    if (poistion === this.length - 1) {
      this.pop();
      return;
    }
    if (poistion === 0) {
      this.shift();
      return;
    }
    console.log('________________');
    let previousNode = this.get(poistion - 1);
    // console.log('Previous Node : ', previousNode);
    let removedNode = previousNode.next;
    // console.log('Removed NOde', removedNode);
    previousNode.next = removedNode.next;
    this.length--;
    console.log('________________');
    return removedNode;
  }
}

let list = new SinglyLinkedList();
list.push('HI');
list.push('hello there');
list.push('I am Tejas Sabunkar');
list.push('Software developer');
list.push('In Mindtree');

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

/* console.log('_______unshifting_______');
console.log(list.unshift('BROO'));
console.log(JSON.stringify(list)); */

/* console.log('_______GET_________');
console.log(list.get(2));
console.log(list.get(4)); */

/* console.log('___________SET__________');
console.log(list.set('I am usha Sabunkar', 2));
console.log(JSON.stringify(list));
 */

/* console.log('____________INSERT_____________');
list.insert(2, '888');
console.log(JSON.stringify(list)); */

/* console.log('________REMOVE_________');
console.log('NOde which got removed : ', JSON.stringify(list.remove(1).value));
console.log('-');
console.log(JSON.stringify(list)); */

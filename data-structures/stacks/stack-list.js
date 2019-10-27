// Singly linked list used to implement Stack

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // !Pushing the element @ head/start/beginning ( Eventhough, Push means adding element @ tail ->
  // !This is to achieve O(1) Time-complexity )
  /**
   * Pushing pseudocode:
   * - The function should accept a value
   * - Create a new node with the value
   * - If there are no nodes in the stack, Set the head and tail property to be the newly created node
   * - If there is at least one node, create a variable that stores the current head property on the stack
   * - Reset the head property to be the newly created node
   * - Set the next property on the node to be the previously created variable
   * - Increment the size by 1
   */
  push(newVal) {
    let newNode = new Node(newVal);
    if (this.size === 0 || !this.head) {
      this.head = this.tail = newNode;
    } else {
      let currentNode = this.head;
      this.head = newNode;
      this.head.next = currentNode;
    }
    this.size++;
    return this.size;
  }

  // !Poping out the element from head/start/beginning ( Eventhough, Pop means Removing element @ tail
  // !This is to achieve O(1) Time-complexity )
  /**
   * Pop pseudocode:
   * - If there are no nodes in the stack, return null
   * - Create a temporary variable to store the head property on the stack
   * - If there is only 1 node, set the head and tail property to be null
   * - If there is more than one node, set the head property to be the next property on current head
   * - Decrement the size by 1
   * - Return the value of the node removed
   */
  pop() {
    if (this.size === 0 || !this.head) {
      return null;
    }
    let nodeToPop = this.head;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.size--;
    return nodeToPop.value;
  }
}

console.log('____________________________');
let stack = new Stack();
console.log(stack.push('Harry'));
console.log(stack.push('Hermoine'));
console.log(stack.push('Ron'));

console.log(JSON.stringify(stack));

console.log('____________POP____________');

console.log(stack.pop());
console.log(JSON.stringify(stack));

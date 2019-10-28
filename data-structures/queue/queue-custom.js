// Implementing Queue using Singly Linked List

// Add to end, remove from the begining

// ! enqueue (push/add) -> Add to the end
// ! dequeue (pop/remove) -> Remove from the begining

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // ! enqueue (push/add) -> Add to the end
  /**
   * Enqueue pseudocode :
   * - This function accepts some value
   * - Create a new node using that value passed to the function
   * - If there are no nodes in the queue, set this node to be the first and last property of the queue
   * - Otherwise, set the next property on the current last to be that node, and then set the last property
   *  of the queue to be that node
   * - Incr the size of queue by 1
   */
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.head || this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this.size;
  }

  // ! dequeue (pop/remove) -> Remove from the begining
  /**
   * - If there is no first property, just return null
   * - Store the first property in a variable
   * - See if the first is the same as the last (check if there is only 1 node). If so, set the first
   *   and last to be null;
   * - If there is more than 1 node, set the first property to be next property of first
   * - Decrement the size by 1
   * - Return the value of dequeued node
   */
  dequeue() {
    if (!this.head || this.size === 0) {
      return null;
    }
    if (this.size === 1 || this.head === this.tail) {
      this.head = this.tail = null;
      return;
    }
    let elementToDequeue = this.head;
    this.head = elementToDequeue.next;
    this.size--;
    return elementToDequeue.value;
  }
}

console.log('_________ADDING to QUEUE/ENQUEUE____________');

let queue = new Queue();
queue.enqueue('Tejas');
queue.enqueue('shailesh');
queue.enqueue('Usha');
console.log(JSON.stringify(queue));

console.log('_________REMOVING from QUEUE/DEQUEUE____________');

queue.dequeue();
console.log(JSON.stringify(queue));

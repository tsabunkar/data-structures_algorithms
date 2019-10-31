class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

/**
 * ! Priority Queue :
 * - Write a Min Binary Heap - Lower number has higher priority.
 * - Each node has a value and a priority. Use the priority to build the heap
 * - Enqueue method accepts a value and prioirty, makes a new node, and puts it in the right spot based
 *   off its priority.
 * - Dequeue method removes root element, returns it and re-arrange heap using priority
 */

class PriorityQueue {
  constructor() {
    this.values = []; // array of node value -> Node[]
  }

  // Adding/inserting to the heap
  enqueue(newValue, priority) {
    // 2 rules - add to the end and bubble up
    let newNode = new Node(newValue, priority);
    this.values.push(newNode);

    this.bubbleUp();
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let currentNode = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);

      let parentNode = this.values[parentIndex];

      if (currentNode.priority <= parentNode.priority) {
        // Swap
        this.values[parentIndex] = currentNode;
        this.values[currentIndex] = parentNode;
        // Re-indexing
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  // Removing/Extracting
  dequeue() {
    // 3 rules - replace root with recently added, remove root, Sink Down
    let rootNode = this.values[0];
    let latestAddedNode = this.values[this.values.length - 1];

    this.values[this.values.length - 1] = rootNode;
    this.values[0] = latestAddedNode;

    this.values.pop();
    this.sinkDown();
    return rootNode.value;
  }

  sinkDown() {
    let parentIndex = 0;
    let parentNode = this.values[parentIndex];

    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let leftChildNode;
      if (leftChildIndex < this.values.length) {
        // index-out-of-bound condition
        leftChildNode = this.values[leftChildIndex];
      }

      let rightChildIndex = 2 * parentIndex + 2;
      let rightChildNode;
      if (rightChildIndex < this.values.length) {
        rightChildNode = this.values[rightChildIndex];
      }

      if (!leftChildNode || !rightChildNode) {
        // checking for undefined
        break;
      }

      let smallestChildPriorityVal = Math.min(
        leftChildNode.priority,
        rightChildNode.priority
      );
      if (
        smallestChildPriorityVal === leftChildNode.priority &&
        leftChildNode.priority < parentNode.priority
      ) {
        // Swap to left
        this.values[parentIndex] = leftChildNode;
        this.values[leftChildIndex] = parentNode;
        // Re-indexing
        parentIndex = leftChildIndex;
      } else if (
        smallestChildPriorityVal === rightChildNode.priority &&
        rightChildNode.priority < parentNode.priority
      ) {
        // Swap to right
        this.values[parentIndex] = rightChildNode;
        this.values[rightChildIndex] = parentNode;
        // Re-indexing
        parentIndex = rightChildIndex;
      } else {
        break;
      }
    }
  }
}

let hospitalQueue = new PriorityQueue();
hospitalQueue.enqueue('cold', 5);
hospitalQueue.enqueue('Gun Shot wound', 1);
hospitalQueue.enqueue('fever', 4);
hospitalQueue.enqueue('broken Arm', 2);
hospitalQueue.enqueue('Loose Motion', 3);

console.log(JSON.stringify(hospitalQueue, undefined, 2));

console.log('---------------------');
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());
console.log(hospitalQueue.dequeue());

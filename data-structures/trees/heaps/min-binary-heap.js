class MinBinaryHeap {
  constructor() {
    this.values = [];
    // this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(newValue) {
    this.values.push(newValue); // push the value to the last of array
    this.bubbleUp(); // BubbleUp the value to its correct position
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const nodeToBubbleUpVal = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parentVal = this.values[parentIndex];
      if (nodeToBubbleUpVal < parentVal) {
        // Swap
        this.values[parentIndex] = nodeToBubbleUpVal;
        this.values[index] = parentVal;
        // Re-indexing
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    let maxVal = this.values[0];
    let lastVal = this.values[this.values.length - 1];

    this.values[this.values.length - 1] = maxVal;
    this.values[0] = lastVal;

    this.values.pop();
    this.sinkDown();

    return maxVal;
  }

  sinkDown() {
    let parentIndex = 0;
    let parentVal = this.values[parentIndex];

    while (true) {
      let leftChildIndex = 2 * parentIndex + 1;
      let leftChildVal;
      if (leftChildIndex < this.values.length) {
        // index-out-of-bound condition
        leftChildVal = this.values[leftChildIndex];
      }

      let rightChildIndex = 2 * parentIndex + 2;
      let rightChildVal;
      if (rightChildIndex < this.values.length) {
        rightChildVal = this.values[rightChildIndex];
      }

      if (!leftChildVal || !rightChildVal) {
        // checking for undefined
        break;
      }

      let smallestChildVal = Math.min(leftChildVal, rightChildVal);
      if (smallestChildVal === leftChildVal && smallestChildVal < parentVal) {
        // Swap to left
        this.values[parentIndex] = smallestChildVal;
        this.values[leftChildIndex] = parentVal;
        // Re-indexing
        parentIndex = leftChildIndex;
      } else if (
        smallestChildVal === rightChildVal &&
        smallestChildVal < parentVal
      ) {
        // Swap to right
        this.values[parentIndex] = smallestChildVal;
        this.values[rightChildIndex] = parentVal;
        // Re-indexing
        parentIndex = rightChildIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new MinBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

//   0    1    2    3    4    5    6
// [55 , 39 , 41 , 18 , 27 , 12 , 33]

console.log(heap.values);
heap.extractMin();
console.log(heap.values);
heap.extractMin();
console.log(heap.values);
heap.extractMin();
console.log(heap.values);
heap.extractMin();
console.log(heap.values);
heap.extractMin();
console.log(heap.values);
heap.extractMin();
console.log(heap.values);
heap.extractMin();
console.log(heap.values);

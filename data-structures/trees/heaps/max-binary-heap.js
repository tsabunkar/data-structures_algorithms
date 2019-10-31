/**
 * insert pseudocode
 * - push the value into the values property on the heap
 * - Bubble the value up to its correct spot
 *
 *
 * Detail Brief :
 * - Push the value into the values property on the heap
 * - Bubble Up:
 *   - Create a variable called index which is the length of the values property - 1
 *   - Create a variable called parentIndex which is the floor of (index-1)/2
 *   - Keep Looping as long as the values element at the parentIndex is less than the values element at
 *     the child index
 *          - Swap the value of the values element at the parentIndex with the value of the element
 *            property at the child index
 *          - Set the index to be the parentIndex, and start over!
 */

class MaxBinaryHeap {
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
      if (nodeToBubbleUpVal > parentVal) {
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

  /**
   * !SinkDown Max value pseudocode:
   * - Swap the first value in the values property with the last one
   * - Pop from the values property, so you can return the value at the end
   * - Have the new root 'sink down' to the correct spot
   *   - Your parent index stats at 0 (the root)
   *   - Find the index of the left child: 2 * index + 1 ( make sure its not out of bounds)
   *   - Find the index of the right child : 2 * index + 2 ( make sure its not our of bounds)
   *   - If the left or right child is greater than the element.. swap. If both left and right children
   *     are larger, swap with the larges child
   *   - The child index you swapped to now becomes the new parent index
   *   - Keep logging and swapping until neither child is lareger than the element
   *   - Return the old root
   */
  extractMax() {
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

      let largestChildVal = Math.max(leftChildVal, rightChildVal);
      if (largestChildVal === leftChildVal && largestChildVal > parentVal) {
        // Swap to left
        this.values[parentIndex] = largestChildVal;
        this.values[leftChildIndex] = parentVal;
        // Re-indexing
        parentIndex = leftChildIndex;
      } else if (
        largestChildVal === rightChildVal &&
        largestChildVal > parentVal
      ) {
        // Swap to right
        this.values[parentIndex] = largestChildVal;
        this.values[rightChildIndex] = parentVal;
        // Re-indexing
        parentIndex = rightChildIndex;
      } else {
        break;
      }
    }
  }

  // !Another Approach
  extractMax2() {
    let maxVal = this.values[0];
    const popedOutVal = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = popedOutVal;
      this.sinkDown2();
    }

    return maxVal;
  }

  sinkDown2() {
    let parentIndex = 0;
    let parentVal = this.values[parentIndex];
    let size = this.values.length;
    while (true) {
      // console.log('inside whie');
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChildVal, rightChildVal;
      let swap = null;

      if (leftChildIndex < size) {
        leftChildVal = this.values[leftChildIndex];
        if (leftChildVal > parentVal) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < size) {
        rightChildVal = this.values[rightChildIndex];
        if (
          (swap === null && rightChildVal > parentVal) ||
          (swap !== null && rightChildVal > leftChildVal)
        ) {
          // checking weather rightChild is greater than parent node, Also rightChild value is greater
          // than left Child value (Largest child condition)
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      // Swap
      this.values[parentIndex] = this.values[swap];
      this.values[swap] = parentVal;
      // Re-indexing
      parentIndex = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

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
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
heap.extractMax();
console.log(heap.values);
console.log('-----------------------');
/* heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
heap.extractMax2();
console.log(heap.values);
heap.extractMax2();
console.log(heap.values);
heap.extractMax2();
console.log(heap.values);
heap.extractMax2();
console.log(heap.values);
heap.extractMax2();
console.log(heap.values);
heap.extractMax2();
console.log(heap.values);
heap.extractMax2();
console.log(heap.values); */

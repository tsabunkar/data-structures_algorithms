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
    // this.values = [];
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(newValue) {
    this.values.push(newValue); // push the value to the last of array
    this.bubbleUp(); // BubbleUp the value to its correct position
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const nodeToBubbleUpVal = this.values[index];

    while (true) {
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

  swap(firstElem, SecondEle) {
    let temp = SecondEle;
    SecondEle = firstElem;
    firstElem = temp;
  }
}

let heap = new MaxBinaryHeap();

/* 
heap.insert(39);
heap.insert(27);
heap.insert(18);
heap.insert(41);
heap.insert(12);
heap.insert(33); 
*/
heap.insert(55);

console.log(heap.values);

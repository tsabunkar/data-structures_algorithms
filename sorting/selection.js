/**
 * Selection Sort :
 * - Store the first element as the smallest value you've seen so far.
 * - Compare this item to the next item in the array until you find a smaller number
 * - If a smaller number is found, designate that smaller number to be the new min and continue untill the
 * end of the array.
 * - If the min is not the value (index) you initially began with, swap the two values.
 * - Repeat this with the next element untill the array is sorted
 */

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// !myversion

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // let smallestVal = arr[i];
    // let indexSmallestVal = i;
    let smallest = { value: arr[i], index: i };
    for (let j = i + 1; j < arr.length; j++) {
      // let tempSmallestVal = smallestVal;
      if (smallest.value > arr[j]) {
        smallest = { ...smallest, value: arr[j], index: j };
        /*    smallest.value = arr[j];
        smallest.index = j; */
      }
    }
    // !swap
    swap(arr, i, smallest.index);
  }

  return arr;
}

console.log(selectionSort([5, 7, 3, 13]));
console.log(selectionSort([34, 22, 10, 19, 17]));

console.log('_________________________________');

// !optimze

function selectionSortOpt(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    if (i !== smallest) {
      // !swap only when i is not lowest
      swap(arr, i, smallest);
    }
  }

  return arr;
}

console.log(selectionSortOpt([5, 7, 3, 13]));
console.log(selectionSortOpt([34, 22, 10, 19, 17]));

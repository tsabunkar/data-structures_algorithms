/**
 * Problem :
 * - Start by piciking the second element in the array
 * - Now compare the second element with the one before it and swap if necessary.
 * - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
 *  (i.e- the left side) to place the element in the correct place.
 * - Repeate until the array is sorted
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    let j;

    // Start creating the 'j' window where the current value is compared and inserted at correct position
    for (j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    // Onces inner loop is finished the currVal is copied to latest index of j+1
    arr[j + 1] = currVal;
  }
  return arr;
}

console.log(insertionSort([5, 3, 4, 1, 2]));

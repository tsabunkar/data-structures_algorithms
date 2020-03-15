/**
 * Pivot Helper Function :
 * - In order to implement merge sort it's useful to first implement a function responsible for arranging
 *  elements in an array on either side of a pivot
 * - Given an array, this helper function should desingate an element as the pivot
 * - It should then re-arrange elements in the array so that all values less than the pivot are moved to
 *  the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
 * - The order of elements on either side of the pivot doesn't matter
 * - This helper shld do this in place, that is - it should not create a new array
 * - When complete, the helper should return the index of the pivot
 */

/**
 * How to pick a pivot ?
 * - The runtime of quick sort depends in part on how one select the pivot
 * - Ideally the pivot shld be chosen so that it's roughly the median/middle value in the data set you're sorting
 * - For simplicity, we'll always choose the pivot to be the first element (There are some concequence for this)
 */

/**
 *  Pivot Helper pseudo code:
 * - It will help to accept three arguments: an array, a start index and an end index (these can default to
 *  0 and the array length minus 1, respectively)
 * - Grab the pivot from the start of the array.
 * - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * - Loop through the array from the start until the end
 *      - If the pivot is greater than the current element, increment the pivot index variable and then
 *        swap the current element with the element at the pivot index.
 * - Swap the starting element (i.e- the pivot) with the pivot index.
 * - Return the pivot index
 */

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivotIndex(arr, start = 0, end = arr.length - 1) {
  let pivotVal = arr[start]; // Assuming/Choosing the pivot to be the first element
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivotVal > arr[i]) {
      // Forming the left windows which has all the element whose value is less than pivotVal
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  // At last move the pivotVal to the index position of [left w/w + 1] or [right w/w -1]
  swap(arr, start, swapIndex);
  //   console.log(arr);
  return swapIndex;
}

// console.log(pivotIndex([4, 8, 2, 1, 5, 7, 6, 3]));

/**
 * ! Iteration :
 *  [4, 8, 2, 1, 5, 7, 6, 3]
 *  [4, 2, 8, 1, 5, 7, 6, 3]
 *  [4, 2, 1, 8, 5, 7, 6, 3]
 *  [4, 2, 1, 3, 5, 7, 6, 8]
 * -> 4 is pivot, left window [2,1,3] and right window [5,7,6,8] now move pivotVal
 *  [3, 2, 1, 4, 5, 7, 6, 8]
 * -> Note : Value of the new pivot is in such a way that all the left side w/w has value less than pivotVal
 *  and all the right side window has greater than pivotVal
 */

/**
 * Quick Sort pseudo code :
 * - Call the pivot helper on the array
 * - When the helper returns to you the updated pivot index, recursively call the pivot helper on the
 *  subarray to the left of that index, and the subarray to the right of that index
 * - Your base case condition occurs- when you consider a subarray with less than 2 elements
 */

/**
 *left(4)          right(3)
 *    [4,6,9,1,2,5,3]
 *
 *  pivot([4,6,9,1,2,5,3])
 * = [3,2,1,4,6,9,5]
 *          4
 *  [3,2,1]       [6,9,5]
 *
 *       3          6
 *       |          |
 *  [2,1, ]      [5, ,9]
 *
 *
 *    2
 *    |
 * [1, ]
 *
 *
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  // left and right are pointer
  if (left < right) {
    // !Base case

    let pivotIdx = pivotIndex(arr, left, right);

    // Left side -
    quickSort(arr, left, pivotIdx - 1);

    // Right side
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));

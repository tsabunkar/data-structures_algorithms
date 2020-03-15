/**
 * ! Procedure :
 * - In order to implement merge sort, its useful to first implement a function responsible for merging
 *  two sorted arrays.
 * - Given two arrays which are sorted, this helper function should create a new array which is also sorted
 *  and consists of all of the elements in the two input arrays.
 * - This function should run in O(n+m) time and O(n+m) space and should not modify the parameters to it
 */

/**
 * ! Pseudocode for Merge Function :
 * - Create an empty array, take a look at the smallest values in each input array.
 * - While there are still values we haven't looked at
 *      - If the value in the first array is smaller than the value in the second array, push the value in
 *         the first array into our results and move on to the next value in the first array.
 *      - If the value in the first array is larger than the value in the second array, push the value in
 *         the second array into our results and move on to the next value in the second array.
 *      - Once we exhaust one array, push in all the reamining values from the other array into result array
 */
// !function which can merge two sorted arrays

/**
 *
 * @param arr1 : Sorted array
 * @param arr2 : Sorted array
 */
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    // O(n)
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  // If arr1 have some left over values, then push all those value to result array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  // If arr2  have some left over values, then push all those value to result array
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

/**
 * ! Pseudocode for MergeSort Function :
 * - Break up the array into two halves untill you have arrays that are empty or have one element
 * - Once you have smaller sorted arrays, merge those arrays with other sorted arrays untill you are back
 *   at the full length of the array.
 * - Once the array has been merged back together, return the merged(and sorted!) array
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    // Base condition for resursion
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  // decompostions/spliting array into halves
  let left = mergeSort(arr.slice(0, mid)); // O(log(n)) - Time complexity
  let right = mergeSort(arr.slice(mid)); // O(log(n)) - Time complexity

  // Combing/Merging all the arrays into resultant array
  return merge(left, right); // O(n) - Time complexity
}

console.log(mergeSort([2, 1, 6, 3]));

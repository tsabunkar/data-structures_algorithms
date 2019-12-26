/*
Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.
*/

/**
 *
 * @param {[]}  arr Array of positive Integers
 * @param {Number} d Number of elements to be rotated
 * @param {Number} n Size of the array
 */
function rotate(arr, d) {
  // Logic to rotate element from left to right
  for (let i = 0; i < d; i++) {
    let elementToRotate = arr.shift();
    arr.push(elementToRotate);
  }

  return arr;
}

console.log(rotate([1, 2, 3, 4, 5], 3));

/*
Write a function rotate(arr[], d, n) that rotates arr[] of size n by d elements.
*/

console.log("_______________________#1_________________________________");

/*
Technique 1: Using temp variable and rotating the array element by element
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
// Time Complexity : O(n) ==> bcoz of shift[ Need to reindex all the elements]
// Space Complexity : O(1)

console.log("_______________________#2_________________________________");

/*
Technique 2: Dividie the Array into two sub-array first sub-array has length of d (no of element to shift)
and remaning sub-array is second-subarray 
*/

function rotate2(arr, d) {
  let firstSubSliceList = arr.slice(0, d);
  let secondSubSliceList = arr.slice(d);
  return [...secondSubSliceList, ...firstSubSliceList];
}

console.log(rotate2([1, 2, 3, 4, 5, 6], 2));
console.log(rotate2([1, 2, 3, 4, 5, 6], 4));

// Time Complexity : O(n) ==> bcoz of slice
// Space Complexity : O(n) ==> Creating sub arrays

console.log("_______________________#3_________________________________");

/*
Technique 3: 
  - Find the GCD or HCF of ==> n (total number of elments) and d (No of elements to rotate)
  - Divide the array into subarrays, where each subarray has total no of elements equals to GCD
  - Rotate element by element from each subarray (from 0 to total length of subarray) 
*/

function rotate3(arr, d) {
  let n = arr.length;
}

/*
GCD of two numbers :
  - 
*/
function gcd(n1, n2) {}

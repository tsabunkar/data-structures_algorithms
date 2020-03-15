/**
 * Searching Algorithms are classified into two types :
 * - Sequential Search: In this, the list or array is traversed sequentially
 *  and every element is checked. For example: Linear Search.
 * - Interval Search: These algorithms are specifically designed for searching in
 *  sorted data-structures. These type of searching algorithms are much more efficient
 *  than Linear Search as they repeatedly target the center of the search structure
 *  and divide the search space in half. For Example: Binary Search.
 *
 */

/**
 * Linear Search
 * Challenge :  Given an array arr[] of n elements, write a function to search a
 *  given element x in arr[].
 */

function searchElement(arr, elementToSearch) {
  for (let index = 0; index < arr.length; index++) {
    if (elementToSearch === arr[index]) {
      return index; // return position of the element
    }
  }
  return -1;
}

const arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
// const x = 110;
const x = 175;
let pos = searchElement(arr, x);
console.log(pos === -1 ? "Element is not present in the array" : pos);

/**
 * Time complexity -> O(n).
 * Space Complexity -> O(1)
 */

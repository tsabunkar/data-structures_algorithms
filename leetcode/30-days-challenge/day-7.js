/**
 *
 * ! Counting Elements
 *
 * Given an integer array arr, count element x such that x + 1 is also in arr.
 *  If there're duplicates in arr, count them seperately.
 *
 * Input: arr = [1,2,3] ==> Output: 2
 * Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
 *
 * Input: arr = [1,1,3,3,5,5,7,7] ==> Output: 0
 * Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
 *
 * Input: arr = [1,3,2,3,5,0] ==> Output: 3
 * Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
 *
 * Input: arr = [1,1,2,2] ==> Output: 2
 * Explanation: Two 1s are counted cause 2 is in arr.
 *
 *
 * Constraints:
 * 1 <= arr.length <= 1000
 * 0 <= arr[i] <= 1000
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], '::', arr[j]);
      if (arr[i] + 1 === arr[j] && arr[i] !== arr[j]) {
        console.log('-------------', arr[i], '__', arr[j]);
        ++counter;
        j = arr.length;
      }
    }
  }

  return counter;
};
// !QUADRATIC Time Complexity

// console.log(countElements([1, 2, 3]));
console.log(countElements([1, 3, 2, 3, 5, 0]));

/**
 * ! Contiguous Array
 *
 * Given a binary array, find the maximum length of a contiguous subarray with equal
 * number of 0 and 1.
 *
 *
 * Input: [0,1] ==> Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 *
 * Input: [0,1,0] ==> Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let maxlen = 0; // 6
  for (let start = 0; start < nums.length; start++) {
    let zeroes = 0; // 0
    let ones = 0; // 0
    for (let end = start; end < nums.length; end++) {
      if (nums[end] == 0) {
        zeroes++;
      } else {
        ones++;
      }
      if (zeroes == ones) {
        maxlen = Math.max(maxlen, end - start + 1);
      }
    }
  }
  return maxlen;
};

// console.log(findMaxLength([0, 1])); // exp- 2
// console.log(findMaxLength([0, 1, 0])); // exp- 2

console.log(findMaxLength([0, 0, 0, 1, 1, 1, 0])); // exp- 6
// console.log(findMaxLength([[0, 0, 1, 0, 0, 0, 1, 1]])); // exp- 6

// [0,1,1,0]
// [0,1,0,0,1]

//

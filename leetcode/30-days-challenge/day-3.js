/**
 * ! Maximum Subarray
 *
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 * which has the largest sum and return its sum.
 *
 * Input: [-2,1,-3,4,-1,2,1,-5,4] ==> Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * NOTE: If you have figured out the O(n) solution, try coding another solution using
 * the divide and conquer approach, which is more subtle.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  //   let maxSum = findMaxValue(nums);
  let maxSum = Math.max(...nums);
  console.log('Initial Max no : ', maxSum);
  let tracerSum = nums[0];
  let i = 0;

  for (let trace = i + 1; i < nums.length; trace++) {
    console.log('i -> ', i, 't ->', trace);
    tracerSum += nums[trace];

    if (tracerSum > maxSum) {
      console.log('** tracerSum ', tracerSum);
      maxSum = tracerSum;
    }

    if (trace >= nums.length - 1) {
      i++;
      trace = i;
      tracerSum = nums[i];
      console.log('new i value', i, trace, ':: maxSum', maxSum);
    }
  }

  return maxSum;
};

/* function findMaxValue(nums) {
  let maxVal = nums[0];
  nums.forEach(ele => {
    if (ele > maxVal) {
      maxVal = ele;
    }
  });
  return maxVal;
} */

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// console.log(maxSubArray([-1]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([-2, 1]));
// console.log(maxSubArray([-1, 1, 2, 1]));
// console.log(findMaxValue([-2, 1]));

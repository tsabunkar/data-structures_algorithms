/**
 * ! Product of Array Except Self
 *
 * Given an array nums of n integers where n > 1,  return an array output such that
 * output[i] is equal to the product of all the elements of nums except nums[i].
 *
 * Example:
 *
 * Input:  [1,2,3,4] ==> Output: [24,12,8,6]
 *
 * Constraint: It's guaranteed that the product of the elements of any prefix or
 * suffix of the array (including the whole array) fits in a 32 bit integer.
 *
 * Note: Please solve it without division and in O(n).
 *
 * Follow up:
 * Could you solve it with constant space complexity?
 * (The output array does not count as extra space for the purpose of space complexity
 *  analysis.)
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // ! logic
  /* 
    {              1,         a[0],    a[0]*a[1],    a[0]*a[1]*a[2],  }
    { a[1]*a[2]*a[3],    a[2]*a[3],         a[3],                 1,  }
 */
  let a1 = [];
  let p1 = 1;

  for (let i = 0; i < nums.length; i++) {
    a1[i] = p1;
    p1 = p1 * nums[i];
  }

  let b1 = [];
  let p2 = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    b1[i] = p2;
    p2 = p2 * nums[i];
  }

  //   console.log(a1);
  //   console.log(b1);

  let outputArray = [];

  for (let i = 0; i < nums.length; i++) {
    outputArray[i] = a1[i] * b1[i];
  }

  console.log(outputArray);

  return outputArray;
};

productExceptSelf([1, 2, 3, 4]);

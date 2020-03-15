/**
 * Write a function called maxSubArraySum which accepts an array of integers and a number called n. The
 * function should calculate the maximum sum of n consecutive elements in the array.
 */

/**
 * Ex: maxSubArraySum([1,2,5,2,8,1,5], 2)  -> 10 (8+2)
 * maxSubArraySum([1,2,5,2,8,1,5], 4) -> 17 (2+5+2+8)
 * maxSubArraySum([4,2,1,6], 1) -> 6
 * maxSubArraySum([4,2,1,6,2], 4)  -> 13 (4+2+1+6)
 * maxSubArraySum([], 4) -> null
 */

function maxSubArraySumFoo(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  // Iterate the loop until lastIndex - num
  for (let i = 0; i < arr.length - num + 1; i++) {
    tempMax = 0;
    // Iterate only portion of window whose size is num
    for (let j = 0; j < num; j++) {
      tempMax += arr[i + j]; // a[0+0], a[0+1], ..etc
    }
    if (tempMax > max) {
      // keep resotring the maximum value in max variable
      max = tempMax;
    }
  }
  return max;
}

console.log(maxSubArraySumFoo([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySumFoo([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySumFoo([4, 2, 1, 6], 1));
console.log(maxSubArraySumFoo([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySumFoo([], 4));

/**
 * Time Complexity : O(n^2)  <- Quadratic Complexity
 * Space Complexity : O(1)
 */

console.log('____________________________________________________________');

function maxSubArraySum(arr, num) {
  let max = 0;
  let tempMax = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  tempMax = max;
  for (let i = num; i < arr.length; i++) {
    // !newSum = previousSum - FirstValueFromWindow + LastPlusOneValueInWindow
    tempMax = tempMax - arr[i - num] + arr[i];
    max = Math.max(max, tempMax);
  }
  return max;
}

/**
 * Time Complexity : O(n)  <- Linear Complexity
 * Space Complexity : O(1)
 */

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log(maxSubArraySum([4, 2, 1, 6], 1));
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log(maxSubArraySum([], 4));

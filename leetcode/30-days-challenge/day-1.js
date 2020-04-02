/**
 *  Single Number
 *
 * Given a non-empty array of integers, every element appears twice except for one.
 *  Find that single one.
 * Note: Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Input: [2,2,1] ==> Output: 1
 * Input: [4,1,2,1,2] ==> Output: 4
 *
 *
 */

// Space complexity - O(1)
// TIme complexity - O(n)

/* var singleNumber = function(nums) {
  let initialCounter = 0;
  element = nums[initialCounter];
  let i = initialCounter;
  while (i < nums.length - 1 || initialCounter < nums.length - 2) {
    element = nums[initialCounter];

    console.log(element, nums[i], ' --> ', i);
    if (element === nums[i]) {
      // duplicate element found, delete that elements, incremnet i
      console.log('BEFORE', initialCounter, i);
      i = initialCounter;
      initialCounter++;
      //   i++;
      console.log('AFTER', initialCounter, i);
    }
    i++;
  }

  return element;
}; */

var singleNumber = function(nums) {
  let intialCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    /*   console.log(' ++ ', intialCounter, i); */
    if (nums[intialCounter] === nums[i] && i !== intialCounter) {
      /*   console.log('BEFORE', intialCounter, i); */

      intialCounter++;
      // Cannot delete the element -> Bcoz will add time complexity
      // So reseting the i to 0 b'coz above for loop will make it i++;
      i = -1;
      /*  console.log('AFTER', intialCounter, i); */
    }
  }

  return nums[intialCounter];
};

// console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([1, 2, 1, 4, 2]));
// console.log(singleNumber([1, 2, 1, 2, 4]));

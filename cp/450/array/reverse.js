/**
 * Write a program to reverse an array
 *
 * Input  : arr[] = {1, 2, 3}
 * Output : arr[] = {3, 2, 1}
 *
 * Input :  arr[] = {4, 5, 1, 2}
 * Output : arr[] = {2, 1, 5, 4}
 */

console.log('_______________________#1_________________________________');
// TC - O(n)
// SC - O(n)
function reverseArray(arr) {
  let resultArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    resultArray.push(arr[i]);
  }
  return resultArray;
}

console.log(reverseArray([1, 2, 3]));
console.log(reverseArray([4, 5, 1, 2]));

console.log('_______________________#2_________________________________');
// TC - O(n/2)
// SC - O(1)
/**
 * Technique is to- reverse the swap the two characters/elements using two place holder
 * -
 */

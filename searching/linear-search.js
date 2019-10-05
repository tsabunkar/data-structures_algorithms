/**
 * This Algo is not good for sorted arrays -> go for binary instead
 * This Algo is good for un-sorted arrays
 *
 * Time COmplexity : O(n)
 * BEST : O(n)
 * AVERAGE : O(n)  ==> (Eventhough we found some where in middle but we will not consider constant in bug picture)
 * WORST : O(n)
 *
 * There many search methods on arrays in JS : indexOf(), includes(), find(), findIndex()
 */

/**
 * function which accepts an array and value.
 * loop through array and check if the current array element is equal to the value
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 */

function linearSeach(arr, numToSearch) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === numToSearch) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSeach([1, 23, 452, 566, 3, 34, 56], 3));

// **Solving same problem using Recursion**

function linearSearchRecursive(arr, numToSearch) {
  let index = 0;
  let result = { value: -1 };

  (function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] === numToSearch) {
      result = { ...result, value: index };
    }

    helperInput = helperInput.slice(1);
    index++;
    helper(helperInput);
  })(arr);

  return result.value;
}

console.log(linearSearchRecursive([1, 23, 452, 566, 3, 34, 56], 452));

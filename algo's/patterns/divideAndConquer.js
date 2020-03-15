/**
 * Given a sorted array of integers, write a function called search, that accepts a value and returns
 * the index where the value passed to the function is located. If the value is not found return -1
 */

/**
 * Ex- search([1,2,3,4,5,6],4) -> 3
 *     search([1,2,3,4,5,6], 6)  -> 5
 *     search([1,2,3,4,5,6], 16)  -> -1
 */

// !Linear search : (Pre-requisite : none)

function search(arr, numToSearch) {
  for (let i = 0; i < arr.length; i++) {
    // O(n)
    if (arr[i] === numToSearch) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 16));

console.log("_____________________________________________________");
/**
 * Time Complexity -> O(n) (Thus Called as LINEAR SEARCH)
 */

// ! Binary Search : (Pre-requisite : Array should be sorted)
/**
 * Pick the middle element divide the array into two check if the number to be searched is above
 * (towards right) or below (towards left). Thus we have divided and then we conquer it. This process
 * goes on, Therefore then name Divide and Conquer whose best example is Binary Search
 */

function binarySearch(arr, numToSearch) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    // everytime keep middle element updated
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < numToSearch) {
      min = middle + 1;
    } else if (currentElement > numToSearch) {
      max = middle - 1;
    } else {
      // When we finally found the search element in the array :)
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 16));

/**
 * Time Complexity : log(N)
 */

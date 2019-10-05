/**
 * Binary Search :
 * - Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a
 * time.
 * - binary seach only work for SORTED Arrays
 */

/**
 * Time Complexity :
 * Best : O(1)
 * Aveg : O(log(n))
 * Worst : O(log(n))
 */

function binarySearch(arr, elementToSearch) {
  let first = 0;
  let last = arr.length - 1;
  while (first <= last) {
    let middle = Math.floor((first + last) / 2);

    if (elementToSearch < arr[middle]) {
      // not considering middle bcoz we have already tested the middle element is not elementTosearch
      // thus middle - 1
      last = middle - 1;
    } else if (elementToSearch > arr[middle]) {
      first = middle + 1;
    } else {
      // Found the element
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 16));

console.log('__________________________________________');

function binarySearch2(arr, elementToSearch) {
  let first = 0;
  let last = arr.length - 1;
  let middle = Math.floor((first + last) / 2);
  while (arr[middle] !== elementToSearch && first <= last) {
    if (elementToSearch < arr[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
    middle = Math.floor((first + last) / 2);
  }
  /*  if (arr[middle] === elementToSearch) {
    return middle;
  }
  return -1; */

  return arr[middle] === elementToSearch ? middle : -1;
}

console.log(binarySearch2([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch2([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch2([1, 2, 3, 4, 5, 6], 16));

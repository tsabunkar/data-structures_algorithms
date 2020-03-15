/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values
 * in the array. There can be negative numbers in the array, but it will always be sorted.
 */

/**
 * Ex -
 * countUniqueValues([1,1,1,1,1,2]) -> 2
 * countUniqueValues([1,2,3,4,4,4,4,7,7,7,12,13]) -> 7
 * countUniqueValues([]) -> 0
 * countUniqueValues([-2,-1,-1,0,1]) -> 4
 */

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let firstIndex = 0;
  let secondIndex = 1;
  let counter = 1;
  while (secondIndex !== arr.length) {
    //O(n)
    let sum = arr[firstIndex] - arr[secondIndex];
    if (sum !== 0) {
      counter++;
    }
    firstIndex++;
    secondIndex++;
  }
  return counter;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 7, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

console.log(
  '_________________________________________________________________'
);
/**
 * Another solution :
 */
function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let firstIndex = 0;
  let secondIndex = 1;

  while (secondIndex !== arr.length) {
    if (arr[firstIndex] === arr[secondIndex]) {
      secondIndex++;
    } else {
      firstIndex++;
      arr[firstIndex] = arr[secondIndex];
    }
  }
  return firstIndex + 1;
}

console.log(countUniqueValues2([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 4, 7, 7, 7, 12, 13]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));

console.log(
  '_________________________________________________________________'
);

/**
 * Same solution with different syntax
 */

function countUniqueValues3(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues3([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues3([1, 2, 3, 4, 4, 4, 4, 7, 7, 7, 12, 13]));
console.log(countUniqueValues3([]));
console.log(countUniqueValues3([-2, -1, -1, 0, 1]));

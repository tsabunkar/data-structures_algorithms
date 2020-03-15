/**
 * Write a function called sumZero which accepts a sorted array of integers. The function should find
 * the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined
 * if a pair does not exist.
 */

/**
 * ex - sumZero([-3,-2,-1,0,1,2,3]) -> [-3,3]
 * sumZero([-2, 0,1,3]) -> undefined
 *  sumZero([1,2,3]) -> undefined
 */

// !My Solution

function sumZeroFoo(numberItems) {
  for (let i = 0; i < numberItems.length / 2; i++) {
    console.log(
      'i : ',
      numberItems[i],
      ' j : ',
      numberItems[numberItems.length - 1 - i]
    );
    if (numberItems[numberItems.length - 1 - i] + numberItems[i] === 0) {
      console.log(numberItems[i], i);
      return true;
    }
  }
}

// console.log(sumZeroFoo([-2, -1, 0, 1, 2]));
console.log(sumZeroFoo([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroFoo([-2, 0, 1, 3]));
console.log(sumZeroFoo([1, 2, 3]));
// console.log(sumZeroFoo([1, -2, 2, 4]));

console.log('_______________________________________________________________');
/**
 * Above understanding of the problem statement is wrong, Question says, check if any match
 * for the element exist whose sum make the array to zero then rerun that pair : Check below solution
 */
function sumZeroFoo2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZeroFoo2([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroFoo2([-2, 0, 1, 3]));
console.log(sumZeroFoo2([1, 2, 3]));

/**
 * Time Complexity : O(n^2)
 * Space Complexity : O(1)
 */

console.log(
  '_________________________BEST SOLN______________________________________'
);

function sumZero(arr) {
  let firstIndex = 0;
  let lastIndex = arr.length - 1;
  while (firstIndex < lastIndex) {
    let sum = arr[firstIndex] + arr[lastIndex];
    if (sum === 0) {
      return [arr[firstIndex], arr[lastIndex]];
    } else if (sum > 0) {
      lastIndex--;
    } else {
      firstIndex++;
    }
  }
}

console.log(sumZeroFoo2([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroFoo2([-2, 0, 1, 3]));
console.log(sumZeroFoo2([1, 2, 3]));

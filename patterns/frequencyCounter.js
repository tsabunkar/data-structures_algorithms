/**
 * Q) Write a function called same, which accepts two arrays. The function shld return true if every
 *  value in the array has it's corresponding value squared in the second array. THe frequency of values
 * must be the same.
 *
 * ex- same([1,2,3], [4,1,9]) -> true
 *  same ([1,2,3,], [1,9]) -> false
 * same([1,2,1,], [4,,4,1]) -> false
 */

/**
 * My Solution without frequency counter pattern
 */

// 1) Make sure the length of the array are same
// 2) Make sure both the input elements are of array instance (no-undefined, null, etc)
function validate(itemOne, itemTwo) {
  if (
    itemOne &&
    itemTwo &&
    itemOne.length === itemTwo.length &&
    itemOne instanceof Array &&
    itemTwo instanceof Array
  ) {
    return true;
  }
  return false;
}

/*   3) From first array, first element square and check weather it exist the second array
  (if so then that element should not be consider for comparing next time)  */

function isSquarePresent(itemOne, itemTwo) {
  if (validate(itemOne, itemTwo)) {
    let itemTwoWrapper = itemTwo.map(elementTwo => {
      // O(n)
      return { element: elementTwo, flag: false };
    });

    let itemOneSquared = itemOne.map(element => Math.pow(element, 2)); // O(n)

    let resultItem = itemTwoWrapper.map(elementTwo => {
      // O(n^2)
      itemOneSquared.forEach(elementOneSquared => {
        if (!elementTwo.flag && elementTwo.element === elementOneSquared) {
          elementTwo.flag = true;
        }
      });
      return elementTwo;
    });

    return resultItem.some(resultElement => resultElement.flag === true); // O(n)
  }
  return false;
}

console.log(isSquarePresent([1, 2, 3], [4, 1, 9]));
console.log(isSquarePresent([1, 2, 3], [1, 9]));
console.log(isSquarePresent([1, 2, 1], [4, , 4, 1]));

/**
 * !Above total time complexity I have taken was =>
 *  O(n) + O(n) + O(n^2) + O(n)
 *  = KO(n) + O(n^2)
 *  = O(n) + O(n^2)
 *  = O(n^2)
 */

console.log(
  '__________________________________________________________________'
);

// ?Second Approach :
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // O(n)
    // Get index value of array-2 which has element that is squared of array-1
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // O(n)
    if (correctIndex === -1) {
      // if index value is not present in array-2
      return false;
    }
    // Then remove that element in the array-2, As it has finished his role of verification
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, , 4, 1]));

/**
 * !Above total time complexity I have taken was =>
 *  = O(n^2)
 */
console.log(
  '__________________________________________________________________'
);

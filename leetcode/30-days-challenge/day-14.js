/**
 * ! Perform String Shifts
 *
 * You are given a string s containing lowercase English letters,
 * and a matrix shift, where shift[i] = [direction, amount]:
 *
 * - direction can be 0 (for left shift) or 1 (for right shift).
 * amount is the amount by which string s is to be shifted.
 *
 * - A left shift by 1 means remove the first character of s and append it to the end.
 * Similarly, a right shift by 1 means remove the last character of s and
 * add it to the beginning.
 *
 * Return the final string after all operations.
 *
 * Example 1
 * Input: s = "abc", shift = [[0,1],[1,2]] ==> Output: "cab"
 * Explanation:
 * [0,1] means shift to left by 1. "abc" -> "bca"
 * [1,2] means shift to right by 2. "bca" -> "cab"
 *
 * Example 2
 * Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]] ==> Output: "efgabcd"
 * Explanation:
 * [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
 * [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
 * [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
 * [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 *
 */
/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
  // use two nested for loop -> 1) To iterate over all the sub-arrays, 2) iterate over
  // direction and amount
  // direction === 0 -> left shift
  // direction === 1 -> right shift
  // amount --> number of element to shift

  let charArray = s.split('');

  for (let i = 0; i < shift.length; i++) {
    const innerArray = shift[i];
    const direction = innerArray[0];
    const amount = innerArray[1];

    if (direction === 0) {
      // left shift by amount
      charArray = leftRotate(charArray, amount);
    } else {
      // right shift
      charArray = rightRotate(charArray, amount);
    }
  }
  return charArray.join('');
};

function leftRotate(charArray, amount) {
  // charArray --> ["t0", "t1", "t2", "t3", "t4", "t5"]
  // charArray.splice(0, 4) --> ["t0", "t1", "t2", "t3"] (Return value)
  // charArray --> ["t4", "t5"]
  return charArray.concat(charArray.splice(0, amount));
  // ["t4", "t5", "t0", "t1", "t2", "t3"]
}

function rightRotate(charArray, amount) {
  // charArray --> ["t0", "t1", "t2", "t3", "t4", "t5"]
  // charArray.splice(6-4, 6) --> ["t2", "t3", "t4", "t5"] (Return value)
  // charArray --> ["t0", "t1"]
  return charArray
    .splice(charArray.length - amount, charArray.length)
    .concat(charArray);
  // ["t2", "t3", "t4", "t5", "t0", "t1"]
}

// !------------------------------------------------------------------
//  * Less readable, but looks sexy ;)
// !------------------------------------------------------------------

var stringShift2 = function (s, shift) {
  let charArray = s.split('');
  let i = -1;
  while (i++ < shift.length - 1) {
    // * I hate it like I love it
    charArray =
      shift[i][0] === 0
        ? rotate(charArray, shift[i][1], -1)
        : rotate(charArray, shift[i][1], 1);
  }

  return charArray.join('');
};

function rotate(charArray, amount, rotateDir) {
  return rotateDir === -1
    ? charArray.concat(charArray.splice(0, amount))
    : charArray
        .splice(charArray.length - amount, charArray.length)
        .concat(charArray);
}

// console.log(leftRotate(['t0', 't1', 't2', 't3', 't4', 't5'], 4));
// console.log(rightRotate(['t0', 't1', 't2', 't3', 't4', 't5'], 4));

console.log(
  stringShift('abc', [
    [0, 1],
    [1, 2],
  ])
);

console.log(
  stringShift('abcdefg', [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
);

console.log('-----------------');

console.log(
  stringShift2('abc', [
    [0, 1],
    [1, 2],
  ])
);

console.log(
  stringShift2('abcdefg', [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3],
  ])
);

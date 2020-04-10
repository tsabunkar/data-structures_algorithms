/**
 *
 * ! Backspace String Compare
 *
 * Given two strings S and T, return if they are equal when both are typed
 * into empty text editors. # means a backspace character.
 *
 *
 * Input: S = "ab#c", T = "ad#c" ==> Output: true
 * Explanation: Both S and T become "ac".
 *
 * Input: S = "ab##", T = "c#d#" ==> Output: true
 *  Explanation: Both S and T become "".
 *
 * Input: S = "a##c", T = "#a#c" ==> Output: true
 * Explanation: Both S and T become "c".
 *
 * Input: S = "a#c", T = "b" ==> Output: false
 * Explanation: S becomes "c" while T becomes "b".
 *
 * ! solve it in O(N) time and O(1) space
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let StrS = removeBackspaceCharacter([...S]);
  let StrT = removeBackspaceCharacter([...T]);

  return StrS === StrT ? true : false;
};

function removeBackspaceCharacter(charArray) {
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === '#') {
      charArray[i] = charArray[i - 1] = null;
      i = i - 2;
    }
    charArray = charArray.filter((ele) => ele);
  }

  console.log(charArray);
  return charArray.join('');
}

// console.log(backspaceCompare('ab#c', 'ad#c'));
// console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a##c', '#a#c'));
// console.log(backspaceCompare('a#c', 'b'));
// console.log(backspaceCompare('xywrrmp', 'xywrrmu#p'));

// console.log(backspaceCompare('a##c', '#a#c'));

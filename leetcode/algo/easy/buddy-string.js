/**
 * 859. Buddy Strings
 *
 * Given two strings a and b, return true if you can swap two letters in a so the result is equal to b,
 * otherwise, return false.
 *
 * Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping
 * the characters at a[i] and a[j].
 *
 * example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 *
 */

/**
 * Brute Force:
 *
 * - Converte String a and b to char arrays
 * - Find the characters in 'a' that are different from 'b' ==> Get the position/index
 * - IF the number of position/index is more than 2, then return false
 * - If index position is 1 then false (bcoz there is different character at b)
 * - If (index position1 !== position2 || no of position is 0) then swap and then check a==b ? true : false
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function (a, b) {
  let charArrayA = a && a.split("");
  let charArrayB = b && b.split("");

  if (charArrayA.length !== charArrayB.length) {
    return false;
  }

  let postion = [];
  for (let index = 0; index < charArrayA.length; index++) {
    if (charArrayA[index] !== charArrayB[index]) {
      postion.push(index);
    }
  }

  //   console.log(postion);
  if (postion.length === 0) {
    const temp = charArrayA[1];
    charArrayA[1] = charArrayA[0];
    charArrayA[0] = temp;

    if (charArrayA.join("") === b) {
      return true;
    }
  }

  if (postion.length === 2 && postion[0] !== postion[1]) {
    const temp = charArrayA[postion[1]];
    charArrayA[postion[1]] = charArrayA[postion[0]];
    charArrayA[postion[0]] = temp;

    if (charArrayA.join("") === b) {
      return true;
    }
  }

  return false;
};

console.log(buddyStrings("ab", "ba"));
console.log(buddyStrings("ab", "ab"));
console.log(buddyStrings("aa", "aa"));
console.log(buddyStrings("aaaaaaabc", "aaaaaaacb"));

module.exports = buddyStrings;

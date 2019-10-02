/**
 * ANAGRAMS : Given two strings, write a function to determine if the second string is an anagram of
 * the first. An anagram is a word, phrase or name formed by rearraning the letters of another,
 * such as cinema, fromed from iceman.
 */

/**
 * Ex : validAnagram('','') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram('rat', 'car') // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty','qeywrt')// true
 * validAnagram('texttwisttime', 'timetwisttext')// true
 */

function validAnagram(str1, str2) {
  let charItemsOne = str1.split('');
  let charItemsTwo = str2.split('');
  //   console.log(charItemsOne);
  //   console.log(charItemsTwo);
  if (charItemsTwo.length !== charItemsOne.length) {
    return false;
  }
  frequencyCounterOne = {};
  frequencyCounterTwo = {};

  for (const ItemOneElement of charItemsOne) {
    // console.log(ItemOneElement);
    frequencyCounterOne[ItemOneElement] =
      (frequencyCounterOne[ItemOneElement] || 0) + 1;
  }
  for (const ItemTwoElement of charItemsTwo) {
    frequencyCounterTwo[ItemTwoElement] =
      (frequencyCounterTwo[ItemTwoElement] || 0) + 1;
  }

  //   console.log(frequencyCounterOne);
  //   console.log(frequencyCounterTwo);
  //   console.log('------------');

  for (const prop in frequencyCounterOne) {
    if (frequencyCounterOne.hasOwnProperty(prop)) {
      //   console.log(frequencyCounterOne[prop]);
      //   console.log(prop);

      if (!(prop in frequencyCounterTwo)) {
        return false;
      }

      if (frequencyCounterOne[prop] !== frequencyCounterTwo[prop]) {
        return false;
      }
    }
  }
  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

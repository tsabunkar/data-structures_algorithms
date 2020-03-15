/**
 * Search number of times short string is present in the long string.
 * ex- searchSubString('wowomgzomg', 'omg') -> 2
 */

function searchSubString(longStr, shortStr) {
  let longChars = longStr.split('');
  let shortChars = shortStr.split('');
  let counter = 0;
  for (let i = 0; i < longChars.length; i++) {
    if (shortChars.length > 0 && shortChars[0] === longChars[i]) {
      let innerCounter = 1;
      for (let j = 1; j < shortChars.length; j++) {
        if (shortChars[j] === longChars[i + j]) {
          innerCounter++;
        }
      }
      if (innerCounter === shortChars.length) {
        counter++;
      }
    }
  }

  return counter;
}

console.log(searchSubString('wowomgzomg', 'omg'));
console.log(searchSubString('wowomgzomg', 'o'));

console.log('__________________________________________________');

function searchSubStringFoo(longStr, shortStr) {
  let counter = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < shortStr.length; j++) {
      if (shortStr[j] !== longStr[i + j]) {
        break;
      }
      if (j === shortStr.length - 1) {
        counter++;
      }
    }
  }

  return counter;
}

console.log(searchSubStringFoo('wowomgzomg', 'omg'));
console.log(searchSubStringFoo('lorie loled', 'lo'));

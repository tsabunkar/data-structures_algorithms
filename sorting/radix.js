/**
 * Radix Sort helpers :
 * - In order to implement radix sort, we required to implement three helper functions:
 * - getDigit(num, position) - return the digit at given postion
 * - digitCount(num) - return the number of digits in num
 * - mostDigits(nums) - Given an array of numbers, returns the number of digits in the largest/Max number
 */

console.log('___________________getDigit_____________________________');

function getDigitFoo(num, position) {
  let tenFactor = 10;
  while (position !== 0) {
    tenFactor *= 10;
    position--;
  }
  /*   console.log(tenFactor); */
  let positionedDigit = num % tenFactor;
  /*   console.log((positionedDigit + '').split('')[0]); */
  return +(positionedDigit + '').split('')[0];
}

console.log(getDigitFoo(12345, 1));
console.log(getDigitFoo(129745, 3));
console.log(getDigitFoo(986, 2));

console.log('________________________________________________');

// !Better solution for getDigit

function getDigit(num, position) {
  return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

console.log(getDigit(12345, 1));
console.log(getDigit(129745, 3));
console.log(getDigit(986, 2));

console.log('___________________digitCount_____________________________');

function digitCount(num) {
  if (num === 0) return 1;

  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

console.log(digitCount(1234));

console.log('__________________mostDigits_____________________________');

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]));
  }
  return maxDigits;
}

console.log(mostDigits([1234, 245, 64, 32, 6, 455]));
console.log(mostDigits([4, 7, 32, 5]));
console.log(mostDigits([4, 7, 2, 5]));

console.log(
  '_____________________RADIX SORT___________________________________'
);

/**
 * Radix Sort Pseudo code :
 * - Define a function that accepts list of numbers.
 * - Figure out number of digits in the largest number
 * - Loop from k-> 0 up to this largest number of digits
 * - For each iteration of the loop:
 *      * Create buckets for each digit (0 to 9)
 *      * Place each number in the corresponding bucket based on its kth digit
 * - Replace our existing array with values in our buckets, starting with 0 and going up to 9
 * - return list at the end
 */

function radixSort(arr) {
  let maxNumberOfDigits = mostDigits(arr);

  for (let i = 0; i < maxNumberOfDigits; i++) {
    // !Each element in the bucket is kept as empty Array ( bcoz- will poping up no need to iterate a loop,
    // !can simply use concat and spread operatore )
    let bucket = Array.from({ length: 10 }, () => []); // bucket of length 10,

    for (let j = 0; j < arr.length; j++) {
      bucket[getDigit(arr[j], i)].push(arr[j]);
    }
    // console.log(bucket);

    arr = [].concat(...bucket);
    // console.log(arr);
  }

  return arr;
}

console.log(radixSort([1, 48, 7487, 87, 2, 78, 7]));

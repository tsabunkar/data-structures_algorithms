/**
 * Write an algorithm to determine if a number is "happy".
 * A happy number is a number defined by the following process: Starting with any positive
 * integer, replace the number by the sum of the squares of its digits, and repeat the
 * process until the number equals 1 (where it will stay), or it loops endlessly in a cycle
 * which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
 *
 * Input: 19 ===> Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 */

var isHappy = function(n) {
  // do while bcoz- first any length number (single or not) should be applied with logic
  do {
    // converte push digit of number to array
    let arr = spiltToDigits(n);
    // square each element in the array
    arr = arr.map(element => squareDigit(element));
    // sum all the values of an array
    n = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  } while (!isSingleDigit(n.toString()));

  // Happy number in single digits are 1 and 7
  return n === 1 || n === 7 ? true : false;
};

// sum -> String
function isSingleDigit(sum) {
  return sum.length === 1 ? true : false;
}

// using spread operator converte nums to num array, where each element is digit
function spiltToDigits(num) {
  let arr = [...num.toString()];
  return arr.map(element => Number.parseInt(element));
}

function squareDigit(digit) {
  return Math.pow(digit, 2);
}

// console.log(isHappy(19));
// console.log(isHappy(32));
// console.log(isHappy(5));
// console.log(isHappy(7));
console.log(isHappy(1111111));

/**
 * ! Bitwise AND of Numbers Range
 *
 * Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all
 *  numbers in this range, inclusive.
 *
 * Example 1:
 * Input: [5,7] ==> Output: 4
 *
 * Example 2:
 * Input: [0,1] ==> Output: 0
 *
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  // (5 & 6 & 7) = 4
  if (m === 0 || n === 0) {
    return 0;
  }
  let product1;
  let product2;

  for (let i = m, j = n; ; ++i, --j) {
    if (i === m && j === n) {
      product1 = i;
      product2 = j;
    }
    console.log(i, j);
    if (i === j) {
      // odd length
      console.log('odd length');
      product1 &= i;
      break;
    }

    if (i + 1 === j) {
      // even length
      console.log('even length');
      product1 &= i;
      product2 &= j;
      break;
    }

    product1 &= i;
    product2 &= j;
  }

  console.log(product1 & product2);
  return product1 & product2;
};

// console.log(rangeBitwiseAnd(5, 7));
// console.log(rangeBitwiseAnd(5, 8));
// console.log(rangeBitwiseAnd(5, 9));
// console.log(rangeBitwiseAnd(5, 10));
// console.log(rangeBitwiseAnd(5, 23));
// console.log(rangeBitwiseAnd(0, 2147483647)); // time exceeds
console.log(rangeBitwiseAnd(20000, 2147483647)); // time exceeds

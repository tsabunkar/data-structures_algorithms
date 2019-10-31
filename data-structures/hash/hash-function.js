// !Hash function that works on string only, we use the UTF-16 character code

function hash(keyStr, arrayLength) {
  let total = 0;
  for (const char of keyStr) {
    // map 'a' to 1, 'b' to 2, etc..
    let codeVal = char.charCodeAt(0) - 96;
    total = (total + codeVal) % arrayLength;
  }
  return total;
}

console.log(hash('pink', 10));
console.log(hash('red', 10));
console.log(hash('cyan', 10));

/**
 * Above hash function has following problems :
 * - Only hashes strings ( we won't worry about this)
 * - Not constant time - linear in key length
 * - Could be a little more random
 *
 * ! Let us improve in hash-function-refine.js
 */

/**
 * Second implementation
 * @param {*} n : end number
 */
function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.time('Time1');
console.log(addUpTo(100));
console.timeEnd('Time1');
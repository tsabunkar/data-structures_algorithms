/**
 * Create a function whcih can takes input as a number, added upto that number,
 * First implementation
 */

function addUpTo(n) {
    let sum = 0;
    for (let index = 0; index <= n; index++) {
        sum += index;
    }
    return sum;
}

console.log(addUpTo(100));
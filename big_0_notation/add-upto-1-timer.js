function addUpTo(n) {
    let sum = 0;
    for (let index = 0; index <= n; index++) {
        sum += index;
    }
    return sum;
}

/* let t1 = performance.now();
console.log(addUpTo(100));
let t2 = performance.now();
console.log(`Time: ${(t2 - t1) / 1000} Seconds`); */

console.time('Time1');
console.log(addUpTo(100));
console.timeEnd('Time1');
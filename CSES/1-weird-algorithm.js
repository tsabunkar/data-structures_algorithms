/**
 * https://cses.fi/problemset/task/1068/
 * Problem :
 * Consider an algorithm that takes as input a positive integer n.
 * If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies
 * it by three and adds one. The algorithm repeats this, until n is one.
 * For example, the sequence for n=3 is as follows:
 * 3→10→5→16→8→4→2→1
 */

/**
 * iterate infinite loop, until the n === 1 (termination condition)
 * else if n is odd -> n = n *3 + 1
 * else if n is even -> n = n/2
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('', function (n) {
  weird(n);
  rl.close();
});

rl.on('close', function () {
  process.exit(0);
});

function weird(m) {
  let n = parseInt(m);
  while (!isNaN(n)) {
    process.stdout.write(`${n} `);
    if (n === 1) break;
    else if (n % 2 === 0) n = n / 2;
    else n = n * 3 + 1;
  }
}

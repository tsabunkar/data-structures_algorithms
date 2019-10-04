function factorial(num) {
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(4)); // 4! =  4*3*2*1 = 24

console.log('____________WITHOUT RECURSION_____');

function fact(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

console.log('Without Recursion', fact(4));

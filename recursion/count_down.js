function countDown(num) {
  for (let index = num; index > 0; index--) {
    console.log(index);
  }
}
countDown(5);

console.log('______________RECURSION___________________');

function countDownRecursion(num) {
  if (num <= 0) {
    // !BASE CONDITION (If no base condition then you will get ERROR :-
    // !RangeError: Maximum call stack size exceeded )
    console.log('DONE');
    return;
  }
  console.log(num);
  num--;
  countDownRecursion(num);
}
countDownRecursion(5);

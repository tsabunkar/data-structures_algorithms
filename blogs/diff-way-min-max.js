/** REF:
 * https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621
 */

/**
 * Finding min and max using Forloop
 */

const array = [37, -5, -15, -37, 5, 15];

const forLoopMinMax = () => {
  let min = array[0],
    max = array[0];

  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    min = value < min ? value : min;
    max = value > max ? value : max;
  }

  return [min, max];
};

const [forLoopMin, forLoopMax] = forLoopMinMax();
console.log("------Finding min and max using Forloop----------");
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`); // Minimum: -37, Maximum: 37

/**
 * Finding min and max using Reduce
 */

const minUsingReduce = () =>
  array.reduce((min, currentValue) => Math.min(min, currentValue), array[0]);

const maxUsingReduce = () =>
  array.reduce((max, currentValue) => Math.max(max, currentValue), array[0]);

console.log("------Finding min and max using Reduce----------");
console.log(`Minimum: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`); // Minimum: -37, Maximum: 37

/**
 * Finding min and max using sort
 */

// By Default  Array.prototype.sort()  ==> lexicographical sort
array.sort((a, b) => a - b); // Sort numerically, ascending
// array.join(", "); // -37, -15, -5, 5, 15, 37

const min = array[0];
const max = array[array.length - 1];
console.log("------Finding min and max using sort----------");
console.log(`Minimum: ${min}, Maximum: ${max}`); // Minimum: -37, Maximum: 37

/**
 * Finding min and max using Math.min.apply, Math.max.apply
 */

console.log(
  "------Finding min and max using Math.min.apply, Math.max.apply----------"
);
console.log(Math.min.apply(null, array)); //  -37
console.log(Math.max.apply(null, array)); // 37

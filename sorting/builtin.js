// !Sorting alphabetical order
let laptopBrands = ['lenovo', 'apple', 'hp', 'dell'];

console.log(laptopBrands.sort());
console.log('_____________________________________');

// !Sorting numbers asc or desc
function numComparator(num1, num2) {
  //   return num1 - num2; // asc
  return num2 - num1; // desc
}

console.log([6, 4, 15, 10].sort(numComparator));
console.log('_____________________________________');

// !Sorting based on number of character in a word/ length of string in laptopBrands Array.

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(laptopBrands.sort(compareByLen));

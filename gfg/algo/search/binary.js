/**
 * Binary Search: Search a sorted array by repeatedly dividing the search interval in half.
 *
 * The idea of binary search is to use the information that the array is sorted
 * and reduce the time complexity to O(Log n).
 */

/* let stdin = process.openStdin();
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
}); */

function binarySearch(arr, elementToSearch) {
  if (!checkArrayIsSorted(arr)) {
    // userInput(arr);
    arr.sort();
  }

  for (let index = 0; index < arr.length / 2; index++) {
    const element = array[index];
  }
}

function checkArrayIsSorted(arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > arr[index + 1]) {
      return false;
    }
  }
  return true;
}

// function userInput(arr) {
//   console.log(
//     "Binary Search is not recommended on unsorted list, do you want to sort your array Y/n ?"
//   );
/* stdin.addListener("data", function(d) {
    console.log("you entered: [" + d.toString().trim() + "]");

    if (d === "Y" || d === "y") {
      arr.sort();
    } else {
      console.log("thanks, please sort your array manuallay and run again");
    }
  }); */
// }

const searchedNum = binarySearch([12, 72, 38, 56, 3, 91, 2, 16], 91);
console.log(searchedNum);

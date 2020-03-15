function swap(value1, valu2) {
  [value1, value2] = [value2, value1];
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([15, 1, 35, 2, 19]));

console.log('____________________________________');

// !Optimize :

function bubbleSortOpti(arr) {
  for (let i = arr.length; i > 0; i--) {
    // !number of inner loop iteration is reduced as compared to naive solution
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        /* let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp; */

        // ! es6 way of syntax
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

console.log(bubbleSortOpti([15, 1, 35, 2, 19]));

console.log('________________________________________');

// !Still Optimizing Buble sort:

/**
 * Use case : When our input array is bit sorted, but even then bubble sort will still travese to
 * all the iterations.
 * Solution is : If we did not swap last time then we will not be swapping next time ownwards
 */

function bubbleSortOpti2(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    // Everytime I m assuming that there is no swaps required
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
      if (noSwap) {
        break;
      }
    }
  }
  return arr;
}

console.log(bubbleSortOpti2([8, 1, 2, 3, 4, 5]));

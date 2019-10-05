/**
 * PURE RECURSION : function is totally pure it does not have any side effects from outside like outerScoped
 * Variable in helper Method Recursion as we have seen (thus, does not have any extenral Data-structrer)
 */

function collectOddValues(arr) {
  // This array will be emptyed everytime this function is called recursively
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

// ! HOW Above function works :
// first iteration : [1].concat(collectOddValues([2,3,4,5]))                                                                         = [1,3,5]
// Second iteration:                 [].concat(collectOddValues([2,3,4,5]))                                                          = [3,5]
// Third iteration :                                 [3].concat(collectOddValues([3,4,5])                                            = [3,5]
// Fourth iteration :                                               [3].concat(collectOddValues([4,5])                               = [3,5]
// Fifth iteration:                                                               [].concat(collectOddValues[5])                     = [5]
// Sixth iteration:                                                                                   [5].concat(collectOddValues[]) = [5]
// Seven iteration:                                                                                                   [5].concat([]) = [5]

/**
 * Note : for arrays, use methods like : slice, the pread operator and concat that make copies of array so you do not mutate them
 * - Remember that strings are immutable so you will need to use methods like slice, substr or substring to make copies of string
 * - To make copies of object use Object.assign() or spread operator
 */

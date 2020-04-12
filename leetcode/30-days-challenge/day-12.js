/**
 * ! Last Stone Weight
 *
 * We have a collection of stones, each stone has a positive integer weight.
 * Each turn, we choose the two heaviest stones and smash them together.
 *
 * Suppose the stones have weights x and y with x <= y.  The result of this smash is:
 * If x == y, both stones are totally destroyed;
 * If x != y, the stone of weight x is totally destroyed, and the stone of weight
 * y has new weight y-x.
 *
 * At the end, there is at most 1 stone left.
 * Return the weight of this stone (or 0 if there are no stones left.)
 *
 *
 *
 * Input: [2,7,4,1,8,1] ==> Output: 1
 * Explanation:
 * We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
 * we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
 * we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
 * we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  let cloneStones = stones;
  // get index of max1 value with index
  // get index of max2 value with index (2nd maximum or equal to first max)
  // smash both max1-max2
  // if => result stone == 0, then don't add any element to array
  // if ==> result stone > 0, then it is add to array @ position (of max1 - index)
  // looping above code, if max2 is null/undefined, reutrn max1

  while (true) {
    let indexMax1 = indexOfMaxValue(cloneStones);

    let indexMax2 = indexOfMaxValue(cloneStones, true, indexMax1);

    if (cloneStones.length === 1 || indexMax2 === undefined) {
      break;
    }

    let smashedValue = cloneStones[indexMax1] - cloneStones[indexMax2];

    if (smashedValue === 0) {
      cloneStones.splice(indexMax1, 1);
      cloneStones.splice(indexMax2, 1);
    } else {
      // replace first max element with smashed result
      cloneStones.splice(indexMax1, 1, smashedValue);
      // remove the second max element
      cloneStones.splice(indexMax2, 1);
    }
  }

  return cloneStones[0] === undefined ? 0 : cloneStones[0];
};

let indexOfMaxValue = function (arr, findSecondMax = false, indexMax1 = null) {
  let indexOfMax;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (!findSecondMax && arr[i] >= max) {
      max = arr[i];
      indexOfMax = i;
    }

    if (findSecondMax && arr[i] >= max && i !== indexMax1) {
      max = arr[i];
      indexOfMax = i;
    }
  }

  return indexOfMax; // !Playing with index bcoz- Array Accessing is O(1)

  // return arr.indexOf(Math.max(...arr)); //! O(n^2)
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([2, 9]));
console.log(lastStoneWeight([2, 2]));

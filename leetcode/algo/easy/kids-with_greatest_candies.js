/**
 * 1431. Kids With the Greatest Number of Candies
 * Given the array candies and the integer extraCandies, where candies[i] represents the
 * number of candies that the ith kid has.
 * For each kid check if there is a way to distribute extraCandies among the kids such
 * that he or she can have the greatest number of candies among them. Notice that multiple kids
 * can have the greatest number of candies.
 *
 * Input: candies = [2,3,5,1,3], extraCandies = 3
 * Output: [true,true,true,false,true]
 * Explanation:
 * Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids.
 * Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
 * Kid 3 has 5 candies and this is already the greatest number of candies among the kids.
 * Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies.
 * Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids.
 *
 *
 * Input: candies = [4,2,1,1,2], extraCandies = 1
 * Output: [true,false,false,false,false]
 * Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
 *
 *
 * Input: candies = [12,1,12], extraCandies = 10
 * Output: [true,false,true]
 *
 */

/**
 * Approach 1:
 * Brute force-
 * - Get the maxGuyCandy = Person who has max number of candides in the candies Array
 * - Loop through all candies --> guyCandy (element)
 * -  extraCandies + guyCandy >= maxGuyCandy ==> result[i] = true
 * - else result[i] = false
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies1 = function (candies, extraCandies) {
  const maxGuyCandy = Math.max(...candies); // O(n)
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    // O(n)
    const guyCandy = candies[i];
    if (extraCandies + guyCandy >= maxGuyCandy) result[i] = true;
    else result[i] = false;
  }
  return result;
};

// ! Making above code more shorter
var kidsWithCandies2 = function (candies, extraCandies) {
  // const maxGuyCandy = Math.max(...candies);
  return candies.map(
    (guyCandy) => extraCandies + guyCandy >= Math.max(...candies)
  );
};

// ! NOTE: Not recommended to use Math.max() with spread operator because it will fail on big
// ! arrays (since all elements are passed as parameters and there is a limit to that)

/**
 * https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621
 */

var kidsWithCandies = function (candies, extraCandies) {
  return candies.map(
    (guyCandy) => extraCandies + guyCandy >= forLoopMaxFinder(candies)
  );
};

const forLoopMaxFinder = (array) => {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    max = array[i] > max ? array[i] : max;
  }

  return max;
};

module.exports = kidsWithCandies;

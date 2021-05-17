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
var kidsWithCandies = function (candies, extraCandies) {
  const maxGuyCandy = Math.max(...candies);
  let result = [];
  for (let i = 0; i < candies.length; i++) {
    const guyCandy = candies[i];
    if (extraCandies + guyCandy >= maxGuyCandy) result[i] = true;
    else result[i] = false;
  }
  return result;
};

module.exports = kidsWithCandies;

/**
 * !Best Time to Buy and Sell Stock II
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions
 * as you like (i.e., buy one and sell one share of the stock multiple times).
 *
 * Note: You may not engage in multiple transactions at the same time (i.e., you must
 * sell the stock before you buy again).
 *
 */

/* var maxProfit = function (prices) {
  if (prices == null || prices.length == 0) return 0;
  let hold = 0;
  let have = false;
  let earn = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let money = prices[i + 1] - prices[i];
    if (money > 0) {
      if (!have) {
        hold = prices[i];
        have = true;
      }
    } else if (money < 0) {
      if (have) {
        earn += prices[i] - hold;
        have = false;
      }
    }
  }
  if (have) earn += prices[prices.length - 1] - hold;

  return earn;
}; */

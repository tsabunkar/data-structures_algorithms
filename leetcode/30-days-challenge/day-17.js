/**
 * ! Minimum Path Sum
 *
 * Given a m x n grid filled with non-negative numbers, find a path from top left to
 * bottom right which minimizes the sum of all numbers along its path.
 *
 * Note: You can only move either down or right at any point in time.
 *
 * Example:
 * Input:
 * [
 * [1,3,1],
 * [1,5,1],
 * [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let rightSum1 = 0; //    ---
  let downSum1 = 0; //        |
  let rightSum2 = 0; //    |
  let downSum2 = 0; //      ---

  for (let i = 0; i < grid[0].length; i++) {
    rightSum1 += grid[0][i];
  }
  for (let i = 0; i < grid.length; i++) {
    downSum1 += grid[i][grid[i].length - 1];
  }

  for (let i = 0; i < grid.length; i++) {
    downSum2 += grid[i][0];
  }

  for (let i = 0; i < grid[grid.length - 1].length; i++) {
    rightSum2 += grid[grid.length - 1][i];
  }
  /*   console.log(rightSum1, ' ', downSum1);
  console.log(downSum2, ' ', rightSum2); */

  return Math.min(
    rightSum1 + downSum1 - grid[0][grid[0].length - 1],
    rightSum2 + downSum2 - grid[grid.length - 1][0]
  );
};

/* console.log(
  minPathSum([
    [1, 3, 1], // 0,2
    [1, 5, 1], // 1,2
    [4, 2, 1], // 2,2
  ])
);

console.log(
  minPathSum([
    [1, 2],
    [1, 1],
  ])
); */

console.log(
  minPathSum([
    [1, 2, 5],
    [3, 2, 1],
  ])
);

console.log(
  minPathSum([
    [1, 2, 5],
    [3, 2, 1],
  ])
);

const kidsWithCandies = require("../kids-with_greatest_candies");

describe("Kids With the Greatest Number of Candies", () => {
  it("Should pass for candies = [2,3,5,1,3], extraCandies = 3", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
  });

  it("Should pass for candies = [4, 2, 1, 1, 2], extraCandies = 1", () => {
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
  });
  it("Should pass for candies = [12,1,12], extraCandies = 10", () => {
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });
});

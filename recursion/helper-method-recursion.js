/**
 * Kind of design pattern for : help Method Recursion
 */

/**
 * Problem : Collect all the odd numbers from the array
 */

function collectOddValues(arr) {
  let collectOdds = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      // Base case to break recursion
      return;
    }

    if (helperInput[0] % 2 === 0) {
      // If first element is odd then push to that first element to collectOdds array
      collectOdds.push(helperInput[0]);
    }

    // Keep slicing the first element from the array and pass this array recursively
    helper(helperInput.slice(1));
  }

  helper(arr);

  return collectOdds;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//*____________________________GENERAL SYNTAX - For HELPER METHOD RECURSION___________________________________________

function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // Modify the outerScopedVariable
    // Have base condition to break recursion
    // call recursively
    helper(helperInput--);
  }

  return outerScopedVariable;
}

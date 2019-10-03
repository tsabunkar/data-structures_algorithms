1. Frequency Counter :

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.
- This pattern is use where - we have multiple pieces of data, we need to check for similar values,
  anagram of one another, comparing piece of data, frequencies count

2. Multiple Pointer

- Creating pointers or values that correspond to an index or position and move towards the begining,
  end or middle based on a certain condition
- Very efficient for solving problems with minimal space complexity as well.
- Consider we have liner items : [-4,-3,-2,-1,0,1,2,5], 'alsksjfigjhids'
  We will keep two pointers i and j at any desirable postion and move this pointer to specific direction
  based on the necessiaty

3. Sliding Window

- This pattern involves creating a window which can either be an array or number from one position to another
- Depending on a certain condition, the window either increases or closes (and a new window is created).
- Very useful for keeping track of a subset of data in an array/string etc.

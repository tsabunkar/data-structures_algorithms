# Sorting

- Sorting is the process of re-arranging the items in a collection (ex- an array) so that the items are in some kind of order (either asc or desc)
- Ex- Sorting numbers from smallest to largest, Sorting names alphabetically, sorting movies based on release year, sorting movies based on revenue
- Different Sorting Algo : Selection Sort, Insertion Sort, Quick Sort, Merge Sort, Heap Sort, Radix Sort (LSD), Radix Sort (MSD), std::sort(gcc), std::stable_sort(gcc), Shell Sort, Bubble Sort, Cocktail Shaker SOrt, Gnome Sort, Bitonic Sort, Bogo Sort,
- Time COmplexity :
  - Bubble Sort : O(n^2)
  - Merge Sort : O(nlog(n))
  - Fast Sort : O(n)
- All Sorting Algo's do have advantages and dis-advantages based based on use-case scenario.
- Elementary Sorting Algo : bubble Sort, Selection Sort and Insertion Sort
- **Builtin Array.sort() method**-> The default sort order is according to String Unicode code points.
  - Telling JS how to sort :
    - The built-in sort method accepts an optional comparator operator function.
    - YOu can use this comparator function to tell JS how you will want it to sort.
    - The comparator looks at pair of elements (a and b), determines their sort order based on the return value
      1. If it return negative number, a should come before b
      2. If it return positive number, a should come after b
      3. If it return 0, a and b are the same as far as the sort is concerned

---

# Bubble Sort/Sinking Sort

- A sorting algorithm where the largest values bubble up to the top
- largest value is at the end of first iteration
- If data is already sorted just bit of element is not sort, then this scneario keeping noSwap flag, wje can conside time complexity is linear - O(n)
- https://visualgo.net/en/sorting
- Time Complexity :
  - Best : O(n)
  - Aveg : O(n^2)
  - Worst : O(n^2) <---Always Consider
- Space Complexity : O(1)

# Selection Sort

- Similar to bubble sort but instead of first placing large values into sorted position, it places small values into sorted position
- Check all the visual alog for all sorting algorithm : https://visualgo.net/en/sorting
- Time Complexity : O(n^2)
- Selection sort is better than bubble sort only in scenario where : If we want to minimize number of swapping. (Writing to memory)
- Time Complexity :
  - Best : O(n^2)
  - Aveg : O(n^2)
  - Worst : O(n^2) <---Always Consider
- Space Complexity : O(1)

# Insertion Sort

- Builds up the sort by gradually creating a large left half which is always sorted.
- Time Complexity : Worst case : O(n^2)
- Good Sorting Algo - when data is coming live from some server or external source bcoz we always have sorted array on left side of the window ( 'j'th window)
- Time Complexity :
  - Best : O(n)
  - Aveg : O(n^2)
  - Worst : O(n^2) <---Always Consider
- Space Complexity : O(1)

---

- Elementary Sorting Algo : Bubble, Selection and Insetion sorts are very basic sorting algo which has quadratic Time comlexity

- Intermediate Sorting Algo : Merge, Quick and Radix sorts have lesser time complexity than compared to quadratic Time Complexity, Thus these are efficient algo's.

---

# Merge Sort

- It is a combination of two thing : Merging and Sorting
- Exploits the fact that arrays of 0 or 1 elements are always sorted.
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array (Divide and Conquer technique)
- Time Complexity :
  - Best : O(nlog(n))
  - Aveg : O(nlog(n))
  - Worst : O(nlog(n)) <---Always Consider
- Space Complexity : O(n) <--- Increased :O
- How time complexity is O(nlog(n))
  ---> O(log(n)) = decompostions/spliting array into halves [ Remeber : mergeSort(arr.slice()) gives log(n) bcoz number of decompostions is lograthmic to base 2 ex- If we have 8 elements then number of splits/decomposition is 3, thus 2^3 = 8 or log(8) = 3]
  ---> O(n) = comparsions per decomposition [ Remeber : merge() function has while loops = K x O(n) = O(n) ]

---

# Quick Sort

- Like Merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by selecting one element (called the 'pivot') and finding the index where the pivot should end up
  in the sorted array.
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
- Time Complexity :
  - Best : O(nlog(n))
  - Aveg : O(nlog(n))
  - Worst : O(n^2) <---Always Consider
    (Already sorted array, when assumed pivot index to be at first or last position in the array --> this will resultant to Quadratic Time Complexity)
    [Thus to solve this problem- Pick the Middle or random pivot Index ]
- Space Complexity : O(log(n))

---

# Radix Sort

- All the above sorts were comparsion sort, which means we are comparing one element with another element and then sorting those element based on less or greate than comparsion.
- Thus maximum we can achieve Time Complexity is : O(nlog(n)) in Comparing sorting algo's ==>
  Ref : https://en.wikipedia.org/wiki/Comparison_sort
- Radix is not comparsion based sorting technique
- Radix sort is a special sorting alogrithm that works on list of numbers (base-10 numbers)
- It never makes comparsion between elements.
- It exploits the fact that information about the size of a number is encoded in the number of digits
- More digits means a bigger number
- Better understanding check : - https://visualgo.net/en/sorting for Radix sort ( You will understand the concept of transfering the element from bucket to an array and vice-versa easily)
- Time Complexity :
  - Best : O(nk) [ n- length of array, k- number of digitis in max number value ]
  - Aveg : O(nk)
  - Worst : O(nk) <---Always Consider
- Space Complexity : O(n+k)

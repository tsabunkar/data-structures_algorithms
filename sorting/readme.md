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
- Time Complexity : O(n^2)
- If data is already sorted just bit of element is not sort, then this scneario keeping noSwap flag, wje can conside time complexity is linear - O(n)
- https://visualgo.net/en/sorting

# Selection Sort

- Similar to bubble sort but instead of first placing large values into sorted position, it places small values into sorted position
- Check all the visual alog for all sorting algorithm : https://visualgo.net/en/sorting
- Time Complexity : O(n^2)
- Selection sort is better than bubble sort only in scenario where : If we want to minimize number of swapping. (Writing to memory)

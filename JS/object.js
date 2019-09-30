let person = {
    firstName : "Tejas",
    isMale : true,
    salaries : [40000, 0]
}

/**
 * Object Time Complexity
 * Insertion = O(n)
 * Removal = O(n)
 * Searching = O(n)
 * Accessing = O(1)
 */


/**
 * Object.Keys = O(n)
 */
console.log(Object.keys(person));

/**
 * Object.values = O(n)
 */
console.log(Object.values(person));

/**
 * Object.entries = O(n)
 */
console.log(Object.entries(person));

/**
 * ObjectName.hasOwnProperty = O(1)
 */
console.log(person.hasOwnProperty('salaries'));


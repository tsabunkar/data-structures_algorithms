/**
 *
 * ! LRU Cache
 *
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 *  It should support the following operations: get and put.
 *
 * get(key) - Get the value (will always be positive) of the key if the key exists in the
 *  cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reached its capacity, it should invalidate the least recently used
 * item before inserting a new item.
 *
 * The cache is initialized with a positive capacity.
 *
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 *
 * Example:
 * LRUCache cache = new LRUCache( 2 / capacity  /);
 *
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 *
 */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.keyMapArray = new Array(capacity);
  this.currentSize = 0;
};

// hashing algo
LRUCache.prototype.hash = function (key) {
  const PRIME = 31;
  return PRIME * key;
  //   return key;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let index = this.hash(key);
  //   console.log('keyMapArray', this.keyMapArray);
  //   console.log('index', index);
  let innerList = this.keyMapArray[index];
  //   console.log('innerList', innerList);
  if (!innerList) {
    return -1;
  }

  let foundKeyValuePair = innerList.find(
    (elementArray) => elementArray[0] === key
  );
  if (!foundKeyValuePair) {
    return -1;
  }
  //   console.log('---> ', index, ' ___', foundKeyValuePair[1]);
  return foundKeyValuePair[1]; // giving the value
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  // index unique
  let index = this.hash(key); // Index is to store the element in Array

  if (this.currentSize >= this.capacity) {
    for (const idx in this.keyMapArray) {
      this.keyMapArray.splice(idx, 1);
    }
  }

  if (!this.keyMapArray[index]) {
    // If there is no element in that index position
    this.keyMapArray[index] = [];
  }

  // pushing array inside an array,(keyMapArray is an array where each element is also an array)
  this.keyMapArray[index].push([key, value]);
  this.currentSize++;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(2);

cache.put(19, 35);
cache.put(2, 46);

console.log(cache.keyMapArray);
console.log(cache.get(19)); // returns 1

// cache.put(3, 3); // evicts key 2
/* cache.put(5, 23);
console.log('---------------');
cache.put(11, 144); */
/* console.log(cache.get(2)); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.keyMapArray);
console.log('****', cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4 */

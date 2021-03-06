class HashTable {
  // Ideally make size as 53, which is bigger prime number
  constructor(size = 4) {
    // default size of random prime number
    this.keyMapArray = new Array(size);
  }

  hash(keyStr) {
    let total = 0;
    const PRIME = 31;
    for (let i = 0; i < Math.min(keyStr.length, 100); i++) {
      const char = keyStr[i];
      let codeVal = char.charCodeAt(0) - 96;
      total = (total * PRIME + codeVal) % this.keyMapArray.length;
    }
    return total;
  }

  /**
   * ! Set psuedocode: (Store the key-value pair)
   * - Accepts a key and a value
   * - Hashes the key
   * - Stores the key-value pair in the hash table array via separate chaining
   */
  set(key, value) {
    if (typeof key !== 'string') {
      return 'Key must be of type string';
    }

    let index = this.hash(key); // Index is to store the element in Array

    if (!this.keyMapArray[index]) {
      // If there is no element in that index position
      this.keyMapArray[index] = [];
    }

    // pushing array inside an array,(keyMapArray is an array where each element is also an array)
    this.keyMapArray[index].push([key, value]);
  }

  /**
   * ! Get psuedocode: (Fetch/Retrieve the value from key passes)
   * - Accept a key
   * - Hashes the key
   * - Retrieves the key-value pair in the hash table
   * - If the key isn't found, returns undefined
   */

  get(key) {
    let index = this.hash(key);
    let innerList = this.keyMapArray[index];
    if (!innerList) {
      return undefined;
    }

    let foundKeyValuePair = innerList.find(
      elementArray => elementArray[0] === key
    );
    if (!foundKeyValuePair) {
      return undefined;
    }
    return foundKeyValuePair[1];
  }

  // !Another approach
  get2(key) {
    let index = this.hash(key);
    if (this.keyMapArray[index]) {
      for (let i = 0; i < this.keyMapArray[index].length; i++) {
        const elementArray = this.keyMapArray[index][i];
        if (elementArray[0] === key) {
          return elementArray[1];
        }
      }
    }
    return undefined;
  }

  /**
   * keys psuedocode:
   * - Loops through the hash table array and returns an array of keys in the table
   */
  keys() {
    return this.traversal(0);
  }

  /**
   * Values psuedocode
   * - Loops through the hash table array and returns an array of Values in the table
   */
  values() {
    return this.traversal(1);
  }

  traversal(index) {
    let keyList = [];
    this.keyMapArray.forEach(innerArrayElement => {
      if (innerArrayElement) {
        innerArrayElement.forEach(element => {
          keyList.push(element[index]);
        });
      }
    });
    return keyList;
  }
}

let hashTable = new HashTable();
hashTable.set('rajma', 'Chawal');
hashTable.set('Lalchola', 'bathora');
hashTable.set('dal', 'kichidi');

console.log('-------------SET-------------------');
console.log(hashTable.keyMapArray);

console.log('--------------GET------------------');
console.log(hashTable.get('dal'));

console.log('--------------KEYS------------------');
console.log(hashTable.keys());

console.log('--------------VALUES------------------');
console.log(hashTable.values());

// !Handling Duplication (NOTE: Keys should be unique but values can be duplicated)
hashTable.set('dal', 'Vada');
console.log(hashTable.values());

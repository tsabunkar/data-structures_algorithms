class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * bst psuedo code:
   * - Create a new node
   * - Starting at the root
   * - Check if there is a root, if not- the root now becomes the new node!
   * - If there is a root, check if the value of the new node is greater than or less than the value of
   *   root node
   * - If greater :
   *    - Check to see if there is a node to the right
   *        - If there is, move to that node and repeat these steps
   *        - If there is not, add that node as the right property
   *  If less :
   *    - Check to see if there is a node to the left
   *        - If there is, move to that node and repeat these steps
   *        - If there is not, add that node as the left property
   */
  insert(newValue) {
    let nodeToInsert = new Node(newValue);
    if (this.root === null) {
      // Checking if root node exist
      this.root = nodeToInsert;
      return this;
    }
    let currentNode = this.root;
    while (1) {
      if (newValue === currentNode.value) {
        // !Handling duplication node value
        return undefined;
      }

      if (newValue > currentNode.value) {
        // Right Edge
        if (currentNode.right === null) {
          currentNode.right = nodeToInsert;
          break; // (or) return this
        }
        currentNode = currentNode.right;
      } else {
        // Left Edge
        if (currentNode.left === null) {
          currentNode.left = nodeToInsert;
          break;
        }
        currentNode = currentNode.left;
      }
    }
    return this;
  }

  /**
   * contains pseudocode:
   * - Starting at the root
   * - Check of there is a root, if not - we're done searching!
   * - If there is a root, check if the value of the new node is the value we are looking for. If we found
   *    if, we're done!
   * - If not, check to see if the value is greater than or less than the value of the root
   * - If it is greater
   *    - Check to see if there is a node to the right
   *        - If there is, move to that node and repeat these steps
   *        - If there is not, we're done searching
   * - If it is less
   *    - Check to see if there is a node to the left
   *        - If there is, move to that node and repeat these steps
   *        - If there is not, we're done searching
   */

  contains(valueToSearch) {
    if (this.root === null) {
      return false;
    }
    if (valueToSearch === this.root.value) {
      return true;
    }

    let currentNode = this.root;
    while (1) {
      if (valueToSearch === currentNode.value) {
        return true;
      }
      if (valueToSearch > currentNode.value) {
        // Right Edge
        if (currentNode.right === null) {
          return false;
        }
        currentNode = currentNode.right;
      } else {
        // Left Edge
        if (currentNode.left === null) {
          return false;
        }
        currentNode = currentNode.left;
      }
    }
  }

  // !Approach 2 :
  contains2(valueToSearch) {
    if (this.root === null) {
      return false;
    }

    let currentNode = this.root;
    let found = false;
    while (currentNode && !found) {
      if (valueToSearch > currentNode.value) {
        // Right Edge
        currentNode = currentNode.right;
      } else if (valueToSearch < currentNode.value) {
        // Left Edge
        currentNode = currentNode.left;
      } else {
        found = true;
        break;
      }
    }
    return found;
  }
}

let bst = new BinarySearchTree();
/* bst.root = new Node(10);
bst.root.right = new Node(15);
bst.root.left = new Node(3);
bst.root.left.right = new Node(4);

console.log(JSON.stringify(bst, undefined, 2));
 */

//       10
//   5        13
// 2  7     11  16

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(7);
bst.insert(16);
console.log(JSON.stringify(bst, undefined, 2));

console.log('___________SEARCH____________');

console.log(bst.contains(7));
console.log(bst.contains2(15));

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

  contains(valueToSearch) {
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

  /**
   * ! BFS pseudocode
   * - Create queue (this can be an array) and a variable to store the values of nodes visited
   * - Place the root node in the queue
   * - Loop as long as there is anything in the queue
   *     - Dequeue node from the queue and push the value of the node into the variable that stores the
   *       nodes
   *     - If there is a left property on the node dequeued - add it to the queue
   *     - If there is a right property on the node dequeued - add it to the queue
   * - Return the variable that stores the values
   */
  breadthFirstSearch() {
    let resultData = [];
    let queue = [];
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift(); // removing node from begining
      resultData.push(node.value);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return resultData;
  }
}

let bst = new BinarySearchTree();

//       10
//   6       15
// 3  8         20

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// console.log(JSON.stringify(bst, undefined, 2));

console.log('___________BFS____________');

console.log(bst.breadthFirstSearch());

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

  /**
   * ! dfs-preorder pseudocode:
   * - Create a variable to store the values of nodes visited
   * - Store the root of the BST in a variable called current
   * - Write a helper function which accepts a node
   *     - Push the value of the node to the variable that stores the values
   *     - If the node has a left property, call the helper function with the left property on the node
   *     - If the node has a right property, call the helper function with the right property on the node
   * - Invoke the helper function with the current variable
   * - Return the array of values
   */

  dfsPreOrder() {
    let nodesVisited = [];
    let currentNode = this.root;

    function traverse(node) {
      nodesVisited.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(currentNode);

    return nodesVisited;
  }
}

let bst = new BinarySearchTree();

//       10
//   6       15
// 3  8    17  20

bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(17);
bst.insert(3);
bst.insert(8);
bst.insert(20);

// console.log(JSON.stringify(bst, undefined, 2));

console.log('___________DFS PRE-ORDER____________');

console.log(bst.dfsPreOrder()); // [ 10, 6, 3, 8, 15, 17, 20 ]

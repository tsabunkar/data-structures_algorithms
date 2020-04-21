/**
 * ! Construct Binary Search Tree from Preorder Traversal
 *
 * Return the root node of a binary search tree that matches the given preorder traversal.
 *
 * (Recall that a binary search tree is a binary tree where for every node, any descendant
 * of node.left has a value < node.val, and any descendant of node.right has
 * a value > node.val.  Also recall that a preorder traversal displays the value
 * of the node first, then traverses node.left, then traverses node.right.)
 *
 * Example:
 * Input: [8,5,1,7,10,12] ==> Output: [8,5,10,1,7,null,12]
 *
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let nodesVisited = [];
  let root = insertArrayToBST(preorder);

  //     console.log(root);
  //     console.log('-------------');

  //     function traverse(node) {
  //       console.log(node.val)
  //       nodesVisited.push(node.val);
  //       if (node.left) {
  //         traverse(node.left);
  //       }
  //       if (node.right) {
  //         traverse(node.right);
  //       }
  //     }
  //     traverse(root);

  //     console.log(nodesVisited)

  return root;
};

var insertArrayToBST = function (preorder) {
  let rootNode = new TreeNode(preorder[0]);
  // console.log(rootNode)

  for (let i = 1; i < preorder.length; i++) {
    insert(rootNode, preorder[i]);
  }

  return rootNode;
};

var insert = function (root, newValue) {
  let nodeToInsert = new TreeNode(newValue);
  if (root === null) {
    // Checking if root node exist
    this.root = nodeToInsert;
    return this;
  }
  let currentNode = root;
  while (1) {
    if (newValue === currentNode.val) {
      // !Handling duplication node value
      return undefined;
    }

    if (newValue > currentNode.val) {
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
};

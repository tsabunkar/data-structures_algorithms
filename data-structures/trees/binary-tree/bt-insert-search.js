class Node {
  constructor(value) {
    this.value = value; // type int
    this.left = this.right = null; // type Node
  }
}

class BinaryTree {
  constructor() {
    this.root = null; // type Node
  }
}

// ! enqeue -> Add the element to the end
// ! dequeue -> Remove element from begining
BinaryTree.prototype.insertAtLeaf = function (rootNode, value) {
  let queue = [];
  queue.push(rootNode); // element/node add at the end

  // Keep doing level order traversal (breadth first approach) of tree using queue
  // until we found leaf node node i.e- [ If we find a node whose left child is empty,
  // we make new nodevalue as left child of the node. Else if we find a node whose right
  // child is empty, we make new nodevalue as right child. We keep traversing the tree
  // until we find a node whose either left or right is empty.]

  while (queue.length !== 0) {
    topNode = queue[0]; // top Node in the queue
    queue.shift(); // removes the headNode of the queue (remove from begining)

    // left child is empty
    if (topNode.left == null) {
      topNode.left = new Node(value); // newNode inserted as left child to its parent node
      break; // break loop bcoz we found the place to insert our new node element
    } else {
      // left child is not empty then traverse to next generation/level
      queue.push(topNode.left);
    }

    // right child is empty
    if (topNode.right == null) {
      topNode.right = new Node(value); // newNode inserted as right child to its parent node
      break;
    } else {
      // right child is not empty then traverse to next generation/level
      queue.push(topNode.right);
    }
  }
};

// depth first search inorder traversal
BinaryTree.prototype.dfsInorder = function (rootNode) {
  // base condition
  if (rootNode === null) return;

  this.dfsInorder(rootNode.left);
  console.log(rootNode.value, ' , ');
  this.dfsInorder(rootNode.right);
};

let bt = new BinaryTree();

bt.root = new Node(1);
bt.root.left = new Node(2);
bt.root.right = new Node(3);
bt.root.left.left = new Node(4);

/* 4 becomes left child of 2 
                    1 
                /       \ 
               2          3 
             /   \       /  \ 
            4    null  null  null 
           /   \ 
          null null 
         */

console.log(bt.root);
console.log('dfs inorder traversal BEFORE Insertion');
bt.dfsInorder(bt.root);

bt.insertAtLeaf(bt.root, 5);

console.log('dfs inorder traversal AFTER Insertion');
bt.dfsInorder(bt.root);
console.log(bt.root);

/* 5 becomes right child of 2 
                     1 
                /        \ 
               2          3 
             /   \       /  \ 
            4    5   null  null 
           /     \ 
          null  null 
         */

bt.insertAtLeaf(bt.root, 6);

/* 6 becomes left child of 3
                     1 
                /        \ 
               2          3 
             /   \       /  \ 
            4    5     6   null 
           /     \ 
          null  null 
         */

bt.dfsInorder(bt.root);
console.log(bt.root);

bt.insertAtLeaf(bt.root, 7);

/* 7 becomes right child of 3
                    1 
                /        \ 
               2         3 
             /   \      /  \ 
            4    5     6    7 
           /     \ 
          null  null 
         */

bt.dfsInorder(bt.root);
console.log(bt.root);

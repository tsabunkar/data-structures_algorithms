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

// BinaryTree.prototype.insert = function () {};

let bt = new BinaryTree();

bt.root = new Node(1);
/* 
              1 
            /   \ 
          null  null     */

bt.root.left = new Node(2);
bt.root.right = new Node(3);

/* 2 and 3 become left and right children of 1 
                  1 
               /    \ 
             2       3 
          /    \    /  \ 
        null null null null  */

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

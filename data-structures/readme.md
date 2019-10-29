# DataStructures

- Structuring your data into particular format is called - Data Structures
- What do data-structure do ? -> Data structures are collections of values, the relationship among them, and the functions or operations that can be applied to the data.
- Why are they so many ? Different data structure excel at different things. Some are highly specialized, while others (like - arrays, object) are more generally used.
  Thus- highly specialized dat structures like graph, hashTable, Tree - These we won't get any programming language for free/out-of-box. Where as Commonly used data structure like arrays, object are avaliable in most of the programming lang in built.
- Why should we care ? -> The more time you spend as a developer, the more likely you'll need to use one of these data structures. Also as developer we can't just use arrays/object to solve all the problems (need to explaned our tool set[ knowledge ] to tackle different problems).
- There is no 'BEST' Data structures - They all excel in different situations.
- ex :
- Working with map/location data ? ==> You want to use graph data structure
- Need an ordered list with fast inser/removals at the begining and end ? ==> Linked list will help !
- Web scraping neseted HTML ? ==> Use Tree
- Need to write a scheduler ? ==> Think about binary heap

---

# Classes

- What is class ? - A blueprint for creating an objects with pre-defined properties and methods.
- JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
- Why to learn this ? We're going to implement data-structures as classes
- The method to create a new objects must be called -> constructor
- use new keyword to create instances of Object
- Static Methods : The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

---

# Singly Linked List

- Objects :
  - Define what is singly Linked List.
  - Compare and contrast linked lists with Arrays
  - Implement insetion, removal and traversal methods on singly linked lists
- What is liniked list : it stores any times of data types - string, number, etc. It is order, It is similiar to Array but there is differen between linked list and array -> In array an element is mapped with number called indexes/position, Where as linked list has element with no indexes/postion these are element just pointing to next element. Kind of boogies in the train. In Linked list we can get/rertieve a specific element by providing the position
- Each element in linked list is called as ==> NODE
- Linked list consist of nodes, and each node has a value and a pointer to another node or null
- Linked is a data structure that contains a head, tail and length property.
- Node store data and it also has reference of the next node or if it is last node then then null.
- Head is the beniging of the linked list, tail is the end of the linked list and the in between items/elements are not kept tracked.
- Each node is connected via next pointer

  <!-- !Singly Linked Lists

    HEAD_____________________________________________TAIL
     |                                               |
    |                                               |
    4 --next---*> 6 --next---*> 8 --next---*> 2 --null--*>

  -->

- In above diagram each node (4,6,8,2) is only connected in one directionally to the next node (Forward direction) thus the name Singly Linked List.
- Analogy of singly linked list group of elephants walking in the circus in a straight line, where each elephant is a node and tail is the reference which elephant has to next elephant
- Analogy of Arrays as lift where we can chose/select which floor we want to go.

---

# Comparing linked list v/s Array:

- Linked List

  - Do not have indexes!
  - Connected via nodes with a next pointer
  - Random access is not allowed (Can't get 5th positioned value, we need to traverse to 5th element)

- Arrays

  - Indexed in order!
  - Insertion and deletion can be expensive
  - Can quickly be accessed at a specific index

NOTE:

- Linked is good at insertion and deletion of the element in any position bcoz Array has problem of re-indexing the complete array.
- Searching and accessing --> Array is preffered winner over singly linked list (bcoz- Array has random access, Means it has constant time to access the element when array are indexed (but only indexing take time) )
- Singly linked lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
- Arrays contain a built in index whereas linked lists do not
- The idea of a list data structures that consists of nodes is the foundation for other data structures like Stacks and Queues

---

# Different functions to be performed in Singly Linked List :

- Push : Adding a new node to the end of the linked list
- Pop : Removing a node from the end of the linked list
- Shift : Removing a new node from the beginning of the linked list (Remove the head node and 2nd node b'comes the new node)
- Unshift : Adding a new node to the beginning of the linked list
- Get : Retrieving/Accessing a node by it's position in the linked list
- Set : Changing/Replacing the value of a node based on its position in the linked list
- Insert : Adding a node to the linked list at a specific postion
- Remove : Removing a node from the linked list at a specific position
- Reverse : Reversing the linked list in place!

---

# Big O of Singly Linked List

- Insert - O(1) [ push,Unshift ]
- Removal - Depends ==> O(1) or O(n) [ Shift -> O(1) , Pop -> O(n) ]
- Search - O(n) [ Get ]
- Access - O(n)

---

# Doubly Linked List

- This DS is almost identical to Singly Linked Lists, expect every node has another pointer to the previous node behind it.
- ex :

    <!-- !Doubly Linked Lists
  
      HEAD_____________________________________________TAIL
       |                                               |
      |                                               |
  <*---4 --next---*> 6 --next---*> 8 --next---*> 2 --null--*>
              <*----   <*---Prev--  <*---Prev--   
    -->

- Comparsion with Singly linked list, Doubly linked list uses More Memory and has More Flexibility
- Doubly linked list are almost identical to Singly Linked List except there is an additional pointer to the previous nodes.
- Best ex- is browser which has next and previous of the current page which we are browsing
- Better than singly linked lists for finding nodes and can be done in half the time
- However, they do take up more memory considering the extra pointer

---

# Big O of Doubly Linked List

- Insert - O(1) [ push,Unshift ]
- Removal - O(1) [ Shift, Pop ]
- Search - O(n) [ Get ] ( but techincally searching is O(n/2) but that's still O(n) )
- Access - O(n)

---

# Stack

- Stack is LIFO (Last in first out) data-structure where the last value in is always the first one out
- The last element added to the stack will be the first element removed from the stack
- Ex Think about a stack of plates, or a stack of books or stack of maerkers (As you pile it up the last thing or topmost thing is what gets removed first)
- ex
  - Call stack (factorial call stack function) ==> Browser stack
  - Stack are generally used to manage the function ivocations in many of the programming langu
  - Undo/Redo functionality in photoshop uses stack
  - Routing (the history object) is treated like a stack!
- There is more than one way of implementing a stack : - Using builtin array, List
- Stack is a concept which tell last in added is fast thing removed, It does not tell how to implement it

- Implementing Stack using Array and -> shift&unshift is not efficient way bcoz the time-complexity increase as re-indexing happens when We Add/unshift the element (or) remove/shift the element in the array
- Therefore we can use push&pop for implementing Stack using Array rather than shift&unshift
- Thus, Stack only says to follow LIFO Pricipal no need to of indices which is present in Arrays so we can also implement stack using Singly Linked List or Doubly Linked List
- Stack are not built in data structure in JS, but are relatively simply to implement

- NOTE : In the array if you add/remove element at the end then there is NO PROBLEM, but if your adding/removing element from the begining then re-indexing problem occurs

---

# Big O of Stack

- Insert - O(1)
- Removal - O(1)
- Search - O(n)
- Access - O(n)

---

# Queue

- Queue is a FIFO(First In First Out) data structure
- Think of line or queue waiting for movie tickets
- When user log in for online game like pubg he will be waiting in the queue, Background task in the computer for ex- downloading mulitple files from the internet if they are in same size happens in the queue or uploading resources
- Printing/Task processing (Printing pages in printer)

---

# Big O of Queue

- Insert - O(1)
- Removal - O(1)
- Search - O(n)
- Access - O(n)

---

# Trees

- Tree is a data-structure that consits of nodes in a parent/child relationship
- We have branches from one node which connect to another node or nodes, hence this branching structure so called ad ===> Tree
- Actual Tree is bottom-up where as This DS Tree is Top-Down Vizually
- NOde can store any type of data - number, string, Arrays, etc
- First Node is called as ===> Root Node
-     <!--

  <!--! TREES

            2 (Root Node)
         / |  \
       45  27 13
              / \
             /   \
           65    34

   -->

  -->

- Lists are linear (means next, next,.. in linear fashion or straight line fashion, Have only one path)
- Trees are non-linear (means there are lot of branches, so more than one pathways)
- A singly likes list can be considered as special code of a tree
- Thumb rule : A parent node should only point to its child node.
- Child node cannot point to parent node, A node cannot point to sibling node, Cannot have two Root Nodes/ two begining points

- Root : is the top node in a tree
- Child : A node dirctly connected to another node when moving away from the Root
- Parent : The converse notion of a child
- Siblings : A group of nodes with the same parent
- Leaf : A node with no children
- Edge : The connection between one node and another (Connection between one node and another node, its the arrow from parent node to child node)
- Trees Example:
  - HTML DOM elements
  - Network Routing
  - Abstract Syntax Tree
  - Artifical Intelligence (Miny-max Tree)
  - folder structure in Operating System
  - Computer File System
  - JSON

---

# Kinds of Trees

- Trees
- Binary Tree
- Binary Search Trees (BST)

---

# Binary Tree

- Each node can have atmost two children nodes (which means it can be 2 child, 1 child or 0 child)

---

# Binary Seach Tree (BST)

- It is the type of Binary Tree ( Special code of Binary Tree )
- BST works for Sorted data
- Every parent node has at most two children
- Every node to the left of parent node is always less than parent
- Every node to the right of parent node is always greater than parent

---

# Big O of BST

- Insert - O(log(n))
- Search - O(log(n))
  [*Not Graunteed]

---

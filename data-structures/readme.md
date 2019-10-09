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

NOTE: Linked is good at insertion and deletion of the element in any position bcoz Array has problem of re-indexing the complete array.

---

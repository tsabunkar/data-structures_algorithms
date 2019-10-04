# Objective

- Define what recursion is and how it can be used
- Understand the two essential components of a recursion function
- Visualize the call stack to better debug and understand recursive function
- Use helper method recursion and pure recursion to solve more difficult problems

---

What is recursion ?

- A process ( a function in our case) that calls itself.
- consider foo function which in-turn/internally call itself i.e- foo
- example :
  JSON.parse / JSON.stringify uses recurisve concept in Mozilla - Rhino Engine, document.getElementById, DOM Traversal algorithms, Object traversal.
- What happens behind the recursion :
  - In almost all program languages, there is a built in data structure that manages what happens when functions are invoked, This data structurer is called : Call stack
  - Any time a function is invoked it is placed (pushed) on the top of the call stack
  - When JS sees the return keyword or when the function ends, the complier will remove (pop).
- Invoke the same function with a different input untill you reach the base case!
- Base Case : The condition when the recursion ends.
- Thus two essential parts of a rescursive function : Base case and Different Input

---

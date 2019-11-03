# Dijkstra's Shortestpath Algorithm

- This alogrithm helps to find the shortest path between two node/vertices on a graph ( Whats the fastest way to get from point A to point B)
- It uses : Graph, Binary heap Priority Queue
- Famous and widely used Algorithms used in real world
- Dijkstra was ->
  - Edsger Dijkstra was a dutch programmer, physicist, essayist and all around smarty-pants
  - He helped to advance the field of computer science from an 'art' to an academic discipline
  - Many of his discoveries and algorithms are still commonly used today
- Uses :
  - GPS- finding fastest route
  - Network Routing - finds open shortest path for data
  - Biology - used to model the spread of viruses among the human
  - Airline tickets - Finding cheapest route to your destination
- 4 Rules of Dijstra algo :
  - Every time we look to visit a new node, we pick the node with the smallest known distance to visit first
  - Once we've moved to the node we're going to visit, we look at each of its neighbors
  - For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking form the starting node
  - If the new total distance to a node is less than previous total, we store the new shorter distance for that node

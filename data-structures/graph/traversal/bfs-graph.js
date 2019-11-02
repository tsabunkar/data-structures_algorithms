class UndirectedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertexValue) {
    if (!this.adjacencyList[vertexValue]) {
      this.adjacencyList[vertexValue] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.removeEdgeHelper(vertex1, vertex2);
    this.removeEdgeHelper(vertex2, vertex1);
  }

  removeEdgeHelper(node1, node2) {
    let filteredList = this.adjacencyList[node1].filter(
      element => element !== node2
    );
    this.adjacencyList[node1] = filteredList;
  }

  removeVertex(vertex) {
    const arrayElement = this.adjacencyList[vertex];
    for (let i = 0; i < arrayElement.length; i++) {
      this.removeEdge(vertex, arrayElement[i]);
    }
    delete this.adjacencyList[vertex];
  }

  /**
   * BreadthFirst Search pseudocode
   * - This function should accept a starting Vertex
   * - Create a queue (you can use an array) and place the starting vertex in it
   * - Create an array to store the node visited
   * - Create an object to store node visited
   * - Mark the starting vertex as visited
   * - Loop as long as there is anything in the queue
   * - Remove the first vertex from the queue and push it into the array that stores nodes visited
   * - Loop over each vertex in the adjacency list for the vertex you are visiting
   * - If it is node inside the object that stores nodes visited. mark it as visited and enqueue
   *    that vertex
   * - Once you have finished looping, return the array of visited nodes
   */
  bfs(startingVertex) {
    let queue = [startingVertex];
    let resultantTraverseList = [];
    let visitedVertices = {};

    visitedVertices[startingVertex] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      resultantTraverseList.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(vertex => {
        if (!visitedVertices[vertex]) {
          visitedVertices[vertex] = true;
          queue.push(vertex);
        }
      });
    }
    return resultantTraverseList;
  }

  bfsReverse(startingVertex) {
    let queue = [startingVertex];
    let resultantTraverseList = [];
    let visitedVertices = {};

    visitedVertices[startingVertex] = true;
    while (queue.length) {
      let currentVertex = queue.shift();
      resultantTraverseList.push(currentVertex);

      this.adjacencyList[currentVertex]
        .slice()
        .reverse()
        .forEach(vertex => {
          if (!visitedVertices[vertex]) {
            visitedVertices[vertex] = true;
            queue.push(vertex);
          }
        });
    }
    return resultantTraverseList;
  }
}

let uGraph = new UndirectedGraph();

console.log('----------ADD VERTEX---------------');
uGraph.addVertex('A');
uGraph.addVertex('B');
uGraph.addVertex('C');
uGraph.addVertex('D');
uGraph.addVertex('E');
uGraph.addVertex('F');
console.log(uGraph.adjacencyList);

console.log('----------ADD EDGE---------------');
uGraph.addEdge('A', 'B');
uGraph.addEdge('A', 'C');
uGraph.addEdge('B', 'D');
uGraph.addEdge('C', 'E');
uGraph.addEdge('D', 'E');
uGraph.addEdge('D', 'F');
uGraph.addEdge('E', 'F');
console.log(uGraph.adjacencyList);

//       A
//      / \
//     B   C
//     |   |
//     D---E
//     \  /
//      F

console.log('-------------DFS Traversal------------');

console.log(uGraph.bfs('A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log(uGraph.bfsReverse('A')); // [ 'A', 'C', 'B', 'E', 'D', 'F' ]

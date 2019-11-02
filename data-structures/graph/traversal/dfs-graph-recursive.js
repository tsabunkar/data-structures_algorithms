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
   * DFS code
   * dfsRecurive(vertex):
   *  if vertex is empty
   *      return (this is base case)
   *  add vertex to result list // Result list contains object where key is node data, value is visited or not visited flag
   *  mark vertex as visited
   *  for each neighbor in vertex's neighbors :
   *      if neighbor is not visited:
   *          recursively call DFS on neighbor
   */

  /**
   * DFS Traversal pseudocode
   * - The function should accept a starting node
   * - Create a list to store the end result, to be returned at the vary end
   * - Create an object to stroe visited vertices
   * - Create a helper function which accepts a vertex
   *     - The helpler function should return null if the vertex is empty
   *     - The helper function should place the vertex it accepts into the visited object and push
   *        that vertex into the result array
   *     - Loop over all of the values in the adjacencyList for that vertex
   *     - If any of those values have not been visited, recursively invoke the helper function with
   *         that vertex
   * - Invoke the helper function with the starting vertex
   * - Return the result array
   */
  dfs(startingVertex) {
    let traversedList = [];
    let visitedVertices = {};
    let thisAdjacencyList = this.adjacencyList;

    function dfsTraversal(vertex) {
      if (!vertex) {
        return null;
      }
      visitedVertices[vertex] = true;
      traversedList.push(vertex);
      thisAdjacencyList[vertex].forEach(neighbor => {
        if (!visitedVertices[neighbor]) {
          // neighobor is not visited
          return dfsTraversal(neighbor);
        }
      });
    }
    dfsTraversal(startingVertex);
    return traversedList;
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

console.log(uGraph.dfs('A'));

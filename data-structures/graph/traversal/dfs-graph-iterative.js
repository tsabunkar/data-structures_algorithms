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
   * dfs(startingVertex):
   *  let S be a stack
   *  S.push(startingVertex)
   *  while S is not empty
   *     vertex = S.pop()
   *     if vertex is not labeled as discovered:
   *        visit vertex (add to result list)
   *        label vertex as discovered
   *        for each of vertex's neighbors, N do
   *            S.push(N)
   */

  /**
   * DFS Traversal pseudocode
   * - The function should accept a starting node
   * - Create a stack to help use keep track of vertices (use a list/array)
   * - Create a list to store the ned result, to be returned at the very end
   * - Create an object to store visited vertices
   * - Add the starting vertex to the stack, and mark it visited
   * - While the stack has something in it :
   *    - Pop the next vertex from the stack
   *    - If that vertex hasn't been visited yet:
   *        - Mark it as visited
   *        - Add it to the result list
   *        - Push all of its neighbors into the stack
   * - Return the result array
   */
  dfs(startingVertex) {
    let traversedList = [];
    let visitedVertices = {};
    let stack = [startingVertex];
    let currentVertex;

    visitedVertices[startingVertex] = true;

    while (stack.length) {
      currentVertex = stack.pop();
      traversedList.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visitedVertices[neighbor]) {
          visitedVertices[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

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

console.log(uGraph.dfs('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]

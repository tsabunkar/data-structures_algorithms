// Undirected Graph
class UndirectedGraph {
  constructor() {
    // Considering the node/vertex value can be string, so using hashTable/Maps DS
    this.adjacencyList = {};
  }
  /**
   * Adding a vertex
   * - Write a method called addVertex, which accepts a name of a vertex/node
   * - It should add a key to the adjacency list with the name of the vertex and
   *   set its value to be an empty aray
   */
  addVertex(vertexValue) {
    if (!this.adjacencyList[vertexValue]) {
      this.adjacencyList[vertexValue] = [];
    }
  }

  /**
   * Adding an edge
   * - This function should accept two vertices, we can call them vertex1 and vertex2
   * - The function should find in the adjacency list the key of vertex1 and push vertex2 to the
   *    array
   * - The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
   * - Don't worry about handling errors/invalid vertices
   */

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  /**
   * Removing an edge
   * - This function should accept two vertices, we'll call them vertex1 and vertex2
   * - The function should reassign the key of vertex1 to be an array that does not contain vertex2
   * - The function should reassign the key of vertex2 to be an array that does not contain vertex1
   * - Don't worry about handling errors/invalid vertices
   */
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

  /**
   * Remove vertex
   * - The function should accept a vertex to remove
   * - The function should loop as long as there are any other vertices in the adjacency list for
   *   that vertex
   * - Inside of the loop, call our removeEdge function with the vertex we are removing and any values
   *   in the adjacency list for that vertex
   * - Delete the key in the adjacency list for that vertex
   */
  removeVertex(vertex) {
    const arrayElement = this.adjacencyList[vertex];
    for (let i = 0; i < arrayElement.length; i++) {
      this.removeEdge(vertex, arrayElement[i]);
    }
    delete this.adjacencyList[vertex];
  }

  // !Another approach
  removeVertex2(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let uGraph = new UndirectedGraph();

console.log('----------ADD VERTEX---------------');
uGraph.addVertex('India');
uGraph.addVertex('Tokyo');
uGraph.addVertex('USA');
uGraph.addVertex('Russia');
uGraph.addVertex('Pakistan');
console.log(uGraph.adjacencyList);

console.log('----------ADD EDGE---------------');
uGraph.addEdge('India', 'USA');
uGraph.addEdge('India', 'Russia');
console.log(uGraph.adjacencyList);

/* console.log('----------REMOVING EDGE---------------');
uGraph.removeEdge('India', 'USA');
console.log(uGraph.adjacencyList);
 */

console.log('----------REMOVING VERTEX---------------');
uGraph.removeVertex('India');
// uGraph.removeVertex2('India');
console.log(uGraph.adjacencyList);

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(nodeVal) {
    if (!this.adjacencyList[nodeVal]) {
      this.adjacencyList[nodeVal] = [];
    }
  }

  addConnection(vertex1, vertex2, weight) {
    this.addConnectionHelper(vertex1, vertex2, weight);
    this.addConnectionHelper(vertex2, vertex1, weight);
  }

  addConnectionHelper(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({
      node: vertex2,
      weight: weight
    });
  }
}

let wGraph = new WeightedGraph();

wGraph.addVertex('A');
wGraph.addVertex('B');
wGraph.addVertex('C');

wGraph.addConnection('A', 'B', 9);
wGraph.addConnection('A', 'C', 5);
wGraph.addConnection('B', 'C', 7);

console.log(wGraph.adjacencyList);

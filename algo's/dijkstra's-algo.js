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

  /**
   * !Dijkstra's pseudocode
   * - This function should accept a starting and ending vertex
   * - Create an object (we'll call it distancesTable -> Table of vertex column and Shortest distance from 'A'
   *   column) and set each key to be every vertex in the adjacency list with a value of infinity,
   *    except for the starting vertex which should have a value of 0
   * - After setting a value in the distances object, add each vertex with a priority of Infinity
   *   to the priority queue, expect the starting vertex, which should have a priority of 0 because
   *   that's where we begin
   * - Create another object called previous and set each key to be every vertec in the adjacency list
   *   with a value of null
   * - Starting looping as long as there is anything in the priority queue
   *   - dequeue a vertex from the priority queue
   *   - If that vertex is the same as the ending vertex - we are done!
   *   - Otherwise loop through each value in the adjacency list at that vertex
   *      - Calculate the distance to that vertex from the starting vertex
   *      - If the distance is less than what is currently stored in our distances object
   *          - Update the distance object with new lower distance
   *          - Update the previous object to container that vertex
   *          - enqueue the vertex with the total distance from the start node
   */

  dijkstraShortestDistanceOfVertices(startVertex, finishVertex) {
    const pQueueNodes = new PriorityQueue();
    const distancesTable = {};
    const previous = {};
    let smallestPriority; // Vertex with the lowest priority -> smallestPriority (Gives node value)
    let path = []; // to return at end

    // *build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distancesTable[vertex] = 0;
        pQueueNodes.enqueue(vertex, 0);
      } else {
        distancesTable[vertex] = Infinity;
        pQueueNodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // console.log('Initial Distances Table', distancesTable);

    // *As long there is something to visit
    while (pQueueNodes.values.length) {
      // Vertex with the lowest priority -> smallestPriority (Gives node value)
      smallestPriority = pQueueNodes.dequeue().value;
      if (smallestPriority === finishVertex) {
        // *We are done, build up path to return at end
        // console.log(distancesTable);
        // console.log(previous);
        while (previous[smallestPriority]) {
          path.push(smallestPriority);
          smallestPriority = previous[smallestPriority];
        }
        break;
      }
      if (smallestPriority || distancesTable[smallestPriority] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallestPriority]) {
          let neighborNode = this.adjacencyList[smallestPriority][neighbor];
          // console.log(neighborNode);
          // * Calculate new distance to neighboring node (Summing from starting node)
          let sumFromStartingNode =
            distancesTable[smallestPriority] + neighborNode.weight;

          let nextNeighborNode = neighborNode.node;
          // Rule 4
          if (sumFromStartingNode < distancesTable[nextNeighborNode]) {
            // * Updating new smallest distance to neighbor
            distancesTable[nextNeighborNode] = sumFromStartingNode;
            // * Updating previous - How we got to neighbor
            previous[nextNeighborNode] = smallestPriority;
            // *enqueue in priority queue with new priority
            pQueueNodes.enqueue(nextNeighborNode, sumFromStartingNode);
          }
        }
      }
    }
    // console.log(path);
    return path.concat(smallestPriority).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    this.values.push({
      value,
      priority
    });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    // !TimeComplexity : O(n*log(n))
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let wGraph = new WeightedGraph();

wGraph.addVertex('A');
wGraph.addVertex('B');
wGraph.addVertex('C');
wGraph.addVertex('D');
wGraph.addVertex('E');
wGraph.addVertex('F');

wGraph.addConnection('A', 'B', 4);
wGraph.addConnection('A', 'C', 2);
wGraph.addConnection('B', 'E', 3);
wGraph.addConnection('C', 'D', 2);
wGraph.addConnection('C', 'F', 4);
wGraph.addConnection('D', 'E', 3);
wGraph.addConnection('D', 'F', 1);
wGraph.addConnection('E', 'F', 1);

console.log(wGraph.adjacencyList);
console.log('----------DIJKSTRA"S SHORTEST PATH ALGO--------------');

console.log(wGraph.dijkstraShortestDistanceOfVertices('A', 'E')); // [ 'A', 'C', 'D', 'F', 'E' ]

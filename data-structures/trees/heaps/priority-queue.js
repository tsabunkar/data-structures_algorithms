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
    // !TimeComplexity : O(n*log(n)) [Not good, Plz use Binary heap which has lesser Time Complexity]
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let pQueue = new PriorityQueue();
pQueue.enqueue('A', 34);
pQueue.enqueue('C', 12);
pQueue.enqueue('B', 50);
pQueue.enqueue('D', 2);
console.log(pQueue);

console.log('--------DE-QUEUE----------');
pQueue.dequeue();
console.log(pQueue);

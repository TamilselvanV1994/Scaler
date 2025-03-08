// Linked List Basic

// creating a class Node for Linked List
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node();
let node2 = new Node(20);

node1.next = node2;

console.log(node1.data);
console.log(node1.next);

let node3 = new Node();

console.log(node3 == null);

// class Node {
//     constructor(data = null) {
//       this.data = data;
//       this.next = null;
//     }
//   }

//   let node1 = new Node(5);
//   let node2 = new Node(10);
//   let node3 = new Node(15);
//   node1.next = node2;
//   node2.next = node3;
//   let head = node1;

//   console.log(head.next.next);

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("Please enter the valid index");
    } else {
      let node = new Node(element);
      let curr, prev;

      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        let it = 0;
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }
}

const LL = new LinkedList();
LL.add(10);
LL.add(20);
LL.add(30);
console.log(LL.head.next.next.element);
console.log(LL.size);

LL.insertAt(40, 3);
LL.insertAt(5, 0);

console.log(LL.head);

// user defined class Node

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

console.log(typeof Node);

// LinkedLisd Class

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //LinkedList functions to be implement
  //add(element) at end of the list

  add(element) {
    let node = new Node(element);

    // to store current head node (temp node)
    let current;

    //if the list is empty
    // add the emement and make it head
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      //itreate to the end of the list
      while (current.next) {
        current = current.next;
      }
      // add the node at end of the list
      current.next = node;
    }
    this.size++;
  }

  //inseartAt(element, index) - insert element to the give index

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      console.log("Please Enter A Valid Index");
    } else {
      // createing a object list for a new element
      let node = new Node(element);
      // creating a current, since we do not want change the head node
      let current = this.head;
      let cur, prev;

      // if index is 0 add it the head element
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        let curr = this.head;
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
  //removeFrom(index)
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log("Please Enter A Valid Index");
    } else {
      let it,
        curr,
        prev = 0;
      curr = this.head;
      prev = curr;

      // deleting first element if index
      if (index === 0) {
        this.head = curr.next;
      } else {
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        prev.next = curr.next;
      }
      this.size--;
      return curr.data;
    }
  }
  //removeElement(element)

  // helper methode
  //isEmpty
  //sizeOfList
  //printList
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str = str + curr.data + "->";
      curr = curr.next;
    }
    console.log(str + "null");
  }
}

// creating a LinkedList object
let LL1 = new LinkedList();
console.log(LL1.head);
LL1.add(10);
console.log(LL1.head);
LL1.add(20);
console.log(LL1);
console.log(LL1.head);
console.log(LL1.head.next);
console.log(LL1.head.next.next);
LL1.add(30);
LL1.add(40);
LL1.add(50);
console.log(LL1.size);

// adding element at index

LL1.insertAt(60, -1);
LL1.insertAt(60, 9);
LL1.insertAt(0, 0);
console.log(LL1);
LL1.printList();
LL1.insertAt(60, 6);
LL1.printList();
LL1.insertAt(55, 6);
LL1.printList();

// removeAt(index)
console.log(LL1.removeFrom(0));
LL1.printList();
console.log(LL1.removeFrom(5));
LL1.printList();

class doubleLL {
  constructor(data) {
    this.data = data;
    this.next = this.previous = null;
  }
}

const dLL1 = new doubleLL(10);
const dLL2 = new doubleLL(20);
const dLL3 = new doubleLL(30);

dLL1.next = dLL2;
dLL2.previous = dLL1;
dLL2.next = dLL3;
dLL3.previous = dLL2;

console.log(dLL1.next.next.previous.next.previous.previous);

tailing.previus.next = newNode;
newnode.previous = tailing.previous;
tailing.previous = newnode;
newnode.next = tailing;

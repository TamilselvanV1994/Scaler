// In the LL find the kth element

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);

console.log(head);

let findK = function (k) {
  let temp = head;

  if (temp == null) {
    return -1;
  }

  for (let i = 0; i < k; i++) {
    if (temp == null) return -1;
    temp = temp.next;
  }
  return temp.value;
};

console.log(findK(2)); // 3
console.log(findK(5)); // out of boundary return -1

// searching for value x

let searchX = function (x) {
  let temp = head;
  while (temp != null) {
    if (temp.value == x) return true;
    temp = temp.next;
  }
  return false;
};

console.log(searchX(4)); //true;
console.log(searchX(100)); //false;

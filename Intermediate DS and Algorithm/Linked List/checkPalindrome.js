// check if the give linked list is polindrome or not

function Node(data) {
  this.data = data;
  this.next = null;
}

// function arrayToLinkedList(arr) {
//   if (arr.length == 0) return null;

//   let head = new Node(arr[0]);
//   let current = head;

//   for (let i = 1; i < arr.length; i++) {
//     current.next = new Node(arr[i]);
//     current = current.next;
//   }
//   return head;
// }

// let arr = ["a", "b", "c", "d"];
// let linkedlist = arrayToLinkedList(arr);

// let current = linkedlist;

// while (current) {
//   console.log(current.data);
//   current = current.next;
// }

function isPalindrome(head) {
  if (!head || !head.next) return true;

  const reverse = (head) => {
    let prev = null;
    let current = head;
    while (current) {
      let forw = current.next;
      current.next = prev;
      prev = current;
      current = forw;
    }
    return prev;
  };

  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let firstHalf = head;
  let secondHalf = reverse(slow);

  while (secondHalf) {
    if (firstHalf.data !== secondHalf.data) {
      return false;
    }

    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }
  return true;
}

let string = "radar";
let [...arr] = string;

function arrayToLinkedList(arr) {
  if (arr.length == 0) return false;

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

let linkedlist = arrayToLinkedList(arr);

let current = linkedlist;
while (current) {
  console.log(current.data);
  current = current.next;
}

console.log(isPalindrome(linkedlist));

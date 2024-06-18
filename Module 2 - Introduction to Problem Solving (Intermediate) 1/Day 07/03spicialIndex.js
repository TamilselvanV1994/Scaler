// Given an array, arr[] of size N, the task is to find the count of array indices such that removing an element from these indices makes the sum of even-indexed and odd-indexed array elements equal.

// EvenPrefixArray
let solve = function (A) {
  let n = A.length;
  let evenPreArray = new Array(n);
  let oddPreArray = new Array(n);

  evenPreArray[0] = A[0];
  for (let i = 1; i < n; i++) {
    if (i % 2 == 0) {
      evenPreArray[i] = evenPreArray[i - 1] + A[i];
    } else {
      evenPreArray[i] = evenPreArray[i - 1] + 0;
    }
  }

  //Odd Prefix Array

  oddPreArray[0] = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 == 1) {
      oddPreArray[i] = oddPreArray[i - 1] + A[i];
    } else {
      oddPreArray[i] = oddPreArray[i - 1] + 0;
    }
  }

  //Special Indiex
  let count = 0;
  for (let i = 0; i < n - 1; i++) {}
};

console.log("Original Array[1, 2, 3, 4, 5]");
console.log(solve([1, 2, 3, 4, 5]));

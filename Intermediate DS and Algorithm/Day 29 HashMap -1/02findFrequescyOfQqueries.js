// // Given an integer Array A and Q, find the frequecy of query elements in the array A and return it's frequecy
// let solve = function (A, Q) {
//   let n = A.length;

//   // creating a Map(hashmap) for the array
//   let map = new Map();
//   for (let i = 0; i < n; i++) {
//     if (map.has(A[i]) == true) {
//       let of = map.get(A[i]);
//       let nf = of + 1; // adding new frequecy
//       map.set(A[i], nf);
//     } else {
//       map.set(A[i], 1);
//     }
//   }

//   // iterating the query and print the answer
//   for (let i = 0; i < Q.length; i++) {
//     if (map.has(Q[i]) == true) {
//       console.log(`${Q[i]}-->${map.get(Q[i])}`);
//     } else {
//       console.log(`${Q[i]}-->0`);
//     }
//   }
// };

// 2 time practice

let solve = function (A, Q) {
  let map = new Map();

  // creating a frequency map
  for (let i = 0; i < A.length; i++) {
    if (map.has(A[i]) == true) {
      let value = map.get(A[i]);
      value = value + 1;
      map.set(A[i], value);
    } else {
      map.set(A[i], 1);
    }
  }

  // checking the frequency for Query
  for (let i = 0; i < Q.length; i++) {
    if (map.has(Q[i]) == true) {
      console.log(`${Q[i]}-->${map.get(Q[i])}`);
    } else {
      console.log(`${Q[i]}-->0`);
    }
  }
};

solve([2, 6, 3, 8, 2, 8, 2, 3, 8, 10, 6], [2, 8, 3, 5]);

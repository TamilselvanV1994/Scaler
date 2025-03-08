// let solve = function (A) {
//   let n = A.length;
//   let set = new Set();
//   for (let i = 0; i < n; i++) {
//     set.add(A[i]);
//   }
//   return set.size;
// };
// console.log(solve([3, 4, 6, 5, 4])); //4

// 2 time practice

// count distinct numbers

let solve = function (A) {
  let set1 = new Set();
  for (let i = 0; i < A.length; i++) {
    set1.add(A[i]);
  }
  return set1.size;
};

console.log(solve([3, 4, 6, 5, 4])); //4

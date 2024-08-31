let solve = function (A) {
  let n = A.length;
  let set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(A[i]);
  }
  return set.size;
};
console.log(solve([3, 4, 6, 5, 4])); //4

let solve = function (A) {
  if (A == 1) return 1;
  return solve(A - 1) + A;
};

console.log(solve(5)); // 15

console.log(solve(4)); // 10

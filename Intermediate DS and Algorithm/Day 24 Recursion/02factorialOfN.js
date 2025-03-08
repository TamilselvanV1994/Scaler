// Factorial of N

let solve = function (N) {
  if (N == 1) return 1;
  return N * solve(N - 1); // N*(N-1)(N-2)....1
};

console.log(solve(5)); // 120

// Recurrsion - A function call it self.

// find the sum of N Natural numbers

let solve = function (N) {
  if (N == 1) return 1;
  return solve(N - 1) + N;
};

console.log(solve(5));

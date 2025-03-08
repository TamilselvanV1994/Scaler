// print the Fibonacci serious of N th number

let solve = function (N) {
  if (N <= 1) return N;
  return solve(N - 1) + solve(N - 2);
};

console.log(solve(6)); //8

//TC - O(2^n)
//SC - O(N)

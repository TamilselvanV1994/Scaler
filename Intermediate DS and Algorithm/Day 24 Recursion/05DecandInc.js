// print the number ginv N to decreasing and increasing order

let solve = function (N) {
  if (N == 0) return;
  console.log(N);
  solve(N - 1);
  console.log(N);
};

solve(3);

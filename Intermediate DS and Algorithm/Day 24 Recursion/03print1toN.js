// print 1 to N integers

let solve = function (N) {
  if (N == 0) return;
  solve(N - 1);
  console.log(N);
};

solve(10);

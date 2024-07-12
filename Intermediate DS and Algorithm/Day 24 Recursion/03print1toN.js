let solve = function (n) {
  if (n == 0) return;
  solve(n - 1);
  console.log(n);
};

solve(10);

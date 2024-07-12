let solve = function (A) {
  if (A == 1) return 1;

  return A * solve(A - 1);
};

console.log(solve(5)); //120

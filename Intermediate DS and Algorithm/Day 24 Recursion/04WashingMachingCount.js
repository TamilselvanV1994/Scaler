// Waching machine counter cont N to 0 in decresing order

let solve = function (N) {
  if (N == 0) {
    console.log(0);
    return;
  }
  console.log(N);
  solve(N - 1);
};

solve(10);

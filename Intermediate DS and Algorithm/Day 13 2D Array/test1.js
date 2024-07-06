let solve = function (A) {
  let n = A.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = temp;
    }
  }

  A.map((curVal, i, array) => {
    array[i].reverse();
  });
  return A;
};

solve([
  [1, 2],
  [3, 4],
]);

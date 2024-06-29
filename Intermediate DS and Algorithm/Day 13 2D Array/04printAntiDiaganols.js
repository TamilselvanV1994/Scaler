//Get the N*N matrix and print the anti-diagonal elements in the matrix
let solve = function (matrix) {
  let n = matrix.length;

  // intialze the first anti-diagonal element
  let i = 0,
    j = n - 1;
  while (i < n) {
    console.log(matrix[i][j]);
    i++;
    j--;
  }
};

solve([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]); // 4 7 10 13

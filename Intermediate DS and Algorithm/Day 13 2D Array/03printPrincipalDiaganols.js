//Give the N*N matrix print the principle diaganal elements
let solve = function (matrix) {
  let n = matrix.length;

  let i = 0,
    j = 0;
  while (i < n) {
    console.log(matrix[i][j]);
    i++;
    j++;
  }
};

solve([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]); // 1 6 11 16

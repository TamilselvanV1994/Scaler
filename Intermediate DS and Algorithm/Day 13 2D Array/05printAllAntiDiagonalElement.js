//In the give N*N matrix print all the antidiagonal elements
let solve = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  // print all diagonal starting from 0 row
  for (let c = 0; c < m; c++) {
    let i = 0;
    let j = c;

    let antiDia = [];
    while (i < n && j >= 0) {
      antiDia.push(matrix[i][j]);
      i++;
      j--;
    }
    console.log(antiDia);
  }

  // print all diagonal from last column
  for (let r = 1; r < n; r++) {
    let i = r;
    let j = m - 1;

    let antiDia = [];
    while (i < n && j >= 0) {
      antiDia.push(matrix[i][j]);
      i++;
      j--;
    }
    console.log(antiDia);
  }
};
solve([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
//   1
//   2 5
//   3 6 9
//   4 7 10 13
//   8 11 14
//   12 15
//   16

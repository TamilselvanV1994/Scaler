let solve = function (matrix) {
  let n = matrix.length;

  //transpose matrix
  for (let i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  //matrix.map((matrix) => console.log(matrix));

  //reverse the every row in the transposed matrix to make it 90deg rotaion
  for (let r = 0; r < n; r++) {
    let i = 0;
    j = n - 1;
    while (i < j) {
      let temp = matrix[r][i];
      matrix[r][i] = matrix[r][j];
      matrix[r][j] = temp;
      i++;
      j--;
    }
  }

  matrix.map((matrix) => console.log(matrix));
};

solve([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
]); // output will be the 90deg clockwise rotated matrix

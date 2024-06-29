// get the input as matrix array (2d array) and print the colwise sum
let solve = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  //iterating the every array in colum wise and add the sum of it elements
  for (let j = 0; j < m; j++) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      //keep the j(column) constant and increaing the i(row) to travarse every element in the first column
      sum += matrix[i][j];
    }
    console.log(sum);
  }
};

solve([
  [4, 3, 1, 7],
  [6, 2, 3, 4],
  [5, 3, 2, 7],
]); // 15 8 6 18

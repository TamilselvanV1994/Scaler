// Get in the input matrix and print the row wise sum
let solve = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  //itrating the every elements in the array
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < m; j++) {
      //add the sum in first row
      sum += matrix[i][j];
    }
    console.log(sum);
  }
};

solve([
  [4, 3, 1, 7],
  [6, 2, 3, 4],
  [5, 3, 2, 7],
]); // 15,15,17

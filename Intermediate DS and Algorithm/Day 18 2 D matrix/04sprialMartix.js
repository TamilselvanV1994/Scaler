// print the matrix in sprial
let solve = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let i = 0,
    j = 0;
  while (n > 1) {
    //i=0 j=0 print 2 elements forward
    for (let k = 1; k < n; k++) {
      console.log(matrix[i][j]);
      j++;
    }

    //i=0 j=2 print 2 elements downwards
    for (let k = 1; k < n; k++) {
      console.log(matrix[i][j]);
      i++;
    }

    //i=2 j=2 print next 2 elements backwards
    for (let k = 1; k < n; k++) {
      console.log(matrix[i][j]);
      j--;
    }

    // i=2 j=0 print next 2 elements upwards
    for (let k = 1; k < n; k++) {
      console.log(matrix[i][j]);
      i--;
    }
    i = i + 1;
    j = j + 1;
    n = n - 2;
  }
  if (n == 1) console.log(A[i][j]);
};

solve([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]); //1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10

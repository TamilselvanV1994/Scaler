// Given an integer A, generate a square matrix filled with elements from 1 to A2 in spiral order and return the generated square matrix.

// Obervation
//1. We need to create matrix for the input A and it's has A^2 value, so we need AXA matrix.
//2. Create a empty element and iterate every element and increate the value 1 from A^2

let solve = function (A) {
  // Creating a 2d array
  let matrix = [];
  //let num = 1;
  for (let i = 0; i < A; i++) {
    matrix[i] = [];
    for (let j = 0; j < A; j++) {
      matrix[i][j] = 0;
    }
  }

  let i = 0;
  let j = 0;
  let num = 1;
  let n = matrix.length;
  let m = matrix[0].length;

  while (n > 1) {
    // print forward
    for (let k = 1; k < n; k++) {
      matrix[i][j] = num;
      j++;
      num++;
    }
    //print downwards
    for (let k = 1; k < n; k++) {
      matrix[i][j] = num;
      i++;
      num++;
    }

    // print backwards
    for (let k = 1; k < n; k++) {
      matrix[i][j] = num;
      j--;
      num++;
    }

    // print upwards
    for (let k = 1; k < n; k++) {
      matrix[i][j] = num;
      i--;
      num++;
    }

    i = i + 1;
    j = j + 1;
    n = n - 2;

    // n = n.length;
  }

  if (n == 1) {
    matrix[i][j] = num;
  }

  matrix.map(function (matrix, i) {
    console.log(matrix);
  });
};

solve(5); // Spritral Matrix

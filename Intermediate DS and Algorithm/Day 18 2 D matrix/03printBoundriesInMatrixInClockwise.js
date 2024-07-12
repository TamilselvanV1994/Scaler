//Matrix N*N print the boundries in clockwise direction

let solve = function (A) {
  let n = A.length;
  let m = A[0].length;

  i = 0;
  j = 0;
  //print upto (n-1) ele --> forward
  for (let k = 1; k < n; k++) {
    console.log(A[i][j]);
    j++;
  }

  //now i=0, j=2 print n-1 to downwods
  for (let k = 1; k < n; k++) {
    console.log(A[i][j]);
    i++;
  }

  //now i=2, j=2 print backword <--
  for (let k = 1; k < n; k++) {
    console.log(A[i][j]);
    j--;
  }

  //now i=2; j=0 print upward
  for (let k = 1; k < n; k++) {
    console.log(A[i][j]);
    i--;
  }
};

solve([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); //1 2 3 6 9 8 7 4

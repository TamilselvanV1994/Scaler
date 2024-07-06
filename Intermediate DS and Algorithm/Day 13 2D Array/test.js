let solve = function (A) {
  let n = A.length;
  let m = A[0].length;
  let ansMat = new Array(n + n - 1).fill(0);
  ansMat.map((curVal, idx, arr) => (arr[idx] = new Array(m).fill(0)));
  //console.log(ansMat[0]);

  // ansMat.map((curVal, i, array) => console.log(array[i]));

  // iterate first row antidiganols
  let curRow = 0;
  for (let c = 0; c < m; c++) {
    let i = 0;
    let j = c;
    while (i < n && j >= 0) {
      ansMat[c][i] = A[i][j];
      //console.log(A[i][j]);
      i++;
      j--;
    }
    curRow = i;
    //ansMat.map((array) => console.log(array));
  }
  console.log(curRow);

  for (let r = 1; r < n; r++) {
    let i = r;
    let j = m - 1;
    let rowIdx = m + r - 1;
    while (i < n && j >= 0) {
      ansMat[rowIdx][i - r] = A[i][j];
      i++;
      j--;
    }
  }
  ansMat.map((array) => console.log(array));
};

solve([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

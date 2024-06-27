//Submatrix sum

let solve = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let ans = 0;
  // itrating the every elements
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      //finding the top left matrix and bottom right conribution for the current element
      let contri = (i + 1) * (j + 1) * ((n - i) * (m - j));
      // muliplying the contribution with the current element and adding it to previous answer
      ans += matrix[i][j] * contri;
    }
  }
  return ans;
};

console.log(
  solve([
    [3, 1],
    [-1, -2],
    [2, 4],
  ])
); //36

// Getting on row sorted binary(0,1) matrix and find the row (index) with maximum number of 1's pressent. if 2 rows has same number on 1's consider smallest row.
let solve = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;

  let i = 0;
  j = m - 1;
  // intially -1 for ans if not row found with 1's
  let ans = -1;

  // setting the boundary conditons
  while (i < n && j >= 0) {
    // checking if the current element is == 1, if yes storing the row index i to ans and decresing the column for next check
    if (matrix[i][j] == 1) {
      ans = i;
      j--;
    }
    // if current elemnt not qual to 1 the increase the row for next check
    else {
      i++;
    }
  }
  return ans;
};

console.log(
  solve([
    [0, 0, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [0, 0, 0, 1],
  ])
); // index 1

console.log(
  solve([
    [0, 1, 1],
    [0, 0, 1],
    [0, 1, 1],
  ])
); // index 0

console.log(
  solve([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
); // no index found -1

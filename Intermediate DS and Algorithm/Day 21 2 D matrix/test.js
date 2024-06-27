
//testing
let solve = function (A, B) {
  let n = A.length;
  let m = A[0].length;
  let ans = 0;

  //console.log(n, m);

  let i = 0;
  let j = m - 1;
  while (i < n && j >= 0) {
    //console.log(i, j);

    if (A[i][j] == B) {
      console.log(i, j);

      ans = (i + 1) * 1009 + (j + 1);
      console.log(ans);
      j--;
    } else if (A[i][j] > B) j--;
    else if (A[i][j] < B) i++;
  }
  return ans;
};

console.log(
  solve(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    2
  )
);

console.log(1 * 1009 + 2);

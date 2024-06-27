// Get the row wise and column wise sorted array as input and find the k is in the matrix.
let solve = function (array, k) {
  let n = array.length;
  let m = array[0].length;

  // intiallize the value to start the itration from top right element
  i = 0;
  j = m - 1;

  // setting the condition
  while (i < n && j >= 0) {
    // checking the k is present on the current element
    if (array[i][j] == k) return true;
    // checking the current element is greater then K we decreate the column index j-- for next check
    else if (array[i][j] > k) j--;
    //  checking the current element is greater then k and incrasing the row index for the next check
    else if (array[i][j] < k) i++;
  }
  return false;
};

console.log(
  solve(
    [
      [-5, -2, 1, 13],
      [-4, 0, 3, 14],
      [-3, 2, 4, 18],
    ],
    0
  )
); // true

console.log(
  solve(
    [
      [-5, -2, 1, 13],
      [-4, 0, 3, 14],
      [-3, 2, 4, 18],
    ],
    15
  )
); //false

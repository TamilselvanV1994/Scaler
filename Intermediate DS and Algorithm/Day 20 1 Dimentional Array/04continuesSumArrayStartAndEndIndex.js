//Bigger pot coin temple problem (Values update from i to j)
let solve = function (A, B) {
  let array = new Array(A).fill(0);
  let n = B.length;

  for (let i = 0; i < n; i++) {
    let start = B[i][0];
    let end = B[i][1];
    let val = B[i][2];
    // updateing the value to the correct index i to n-1
    array[start] += val;
    // updateing the negative value (-) to the make it 0 after the j+1 to n-1 (j is the end index)
    if (end + 1 < array.length) array[end + 1] -= val; //array[i] = array[i] - val;
  }

  //prefix sum

  for (let j = 1; j < array.length; j++) {
    array[j] = array[j - 1] + array[j];
  }

  return array;
};

console.log(
  solve(7, [
    [1, 3, 2],
    [2, 5, 5],
    [5, 6, -1],
  ])
);

// Bigger pot coin temple problem (Values update from i to n-1)

// Get th input A for the number of array size, we need create a empty array
// input B has first is starting index and second element is the Value we need to update i to n-1
// After updating all the valuse we get the final array(we used the prefix methode)

let solve = function (A, B) {
  let array = new Array(A).fill(0);

  for (let i = 0; i < B.length; i++) {
    let index = B[i][0];
    let val = B[i][1];
    array[index] = val;
  }

  // prefix sum

  for (let j = 1; j < array.length; j++) {
    array[j] = array[j - 1] + array[j];
  }
  return array;
};

console.log(
  solve(6, [
    [3, 4],
    [1, 3],
    [4, -2],
  ])
); //[0,3,3,7,5,5]

console.log(
  solve(5, [
    [1, 3],
    [0, 2],
    [4, 1],
  ])
); //[2,5,5,5,6]

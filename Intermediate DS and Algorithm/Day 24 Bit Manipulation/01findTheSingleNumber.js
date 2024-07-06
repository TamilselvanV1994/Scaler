// Get the integer array and return the uniqe nuber in the array

let solve = function (A) {
  let ans = 0;
  //iterating the every element in the array
  for (let i = 0; i < A.length; i++) {
    // doing XOR with evey element so the same element will become 0 since A^A=0 the we can get the unique element at end of the iteration
    ans = ans ^ A[i];
  }

  return ans;
};

console.log(solve([3, 2, 3, 7, 2, 8, 7])); // 8

console.log(solve([1, 5, 2, 1, 9, 2, 5])); //9

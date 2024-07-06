// given interger array of n size and we have to find all subarray sum and return the miximum sum of the sub array
let solve = function (A) {
  let n = A.length;

  // initally taking the ans as -Infinity since we are going to find the max value;
  let ans = -Infinity;

  // using to tow nested loops to dine a start and end index of subarray
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      // itrating every sub array using start and end index and adding every sub array sum to the sum
      for (let k = i; k <= j; k++) {
        sum = sum + A[k];
      }
      // checking the the current subarray sum>ans if true assing the current sum to the ans
      if (sum > ans) {
        ans = sum;
      }
    }
  }
  return ans;
};

console.log(solve([1, 2, 3])); //6

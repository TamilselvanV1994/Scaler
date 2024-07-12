// given interger array of n size and we have to find all subarray sum and return the miximum sum of the sub array (PREFIX SUM TECHNIQUE)
let solve = function (A) {
  let n = A.length;

  // initally taking the ans as -Infinity since we are going to find the max value;
  let ans = -Infinity;

  //creating a prefix array
  let prefix = new Array(n);

  prefix[0] = A[0];
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + A[i];
  }

  //console.log(prefix);

  // using to tow nested loops to dine a start and end index of subarray
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;

      // using the prefix sum to caluculate the sub array sum
      if (i == 0) sum = prefix[j];
      else sum = prefix[j] - prefix[i - 1];

      // checking the the current subarray sum>ans if true assing the current sum to the ans
      if (sum > ans) {
        ans = sum;
      }
    }
  }
  return ans;
};

console.log(solve([1, 2, 3])); //6

// TC:O(n^2) SC:O(n)

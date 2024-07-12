// given interger array of n size and we have to find all subarray sum and return the miximum sum of the sub array (Carry forward techniqe)
let solve = function (A) {
  let n = A.length;

  let ans = -Infinity;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      // cary forward the sum of the all the previous element in to the current element.
      sum = sum + A[j];
    }
    if (sum > ans) {
      ans = sum;
    }
  }

  return ans;
};

console.log(solve([1, 2, 3])); //6

// TC:O(n^2) SC:O(1)

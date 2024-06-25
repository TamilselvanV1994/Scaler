// To get the integar array and return the maximum subarray sum (carry forward technique used)
let solve = function (array) {
  let n = array.length;
  let ans = -Infinity;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += array[j];
      if (sum > ans) ans = sum;
    }
  }
  return ans;
};

console.log(solve([-2, 3, 4, -1, 5, -10, 7])); //11
console.log(solve([4, 5, 2, 1, 6])); //18

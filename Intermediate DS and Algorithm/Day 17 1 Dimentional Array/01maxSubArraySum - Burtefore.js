//Get the input as number array and return the maximum subarray sum
let solve = function (array) {
  let ans = -Infinity;
  let n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += array[k];
        //console.log(sum);
      }
      if (sum > ans) ans = sum;
    }
  }
  return ans;
};

console.log(solve([4, 5, 2, 1, 6])); //18
console.log(solve([-3, 2, 4, -1, 3, -4, 3])); //8
console.log(solve([-2, 3, 4, -1, 5, -10, 7])); //11

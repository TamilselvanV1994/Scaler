// A give array, find the subarray sum with K and return subarry else [-1];

let arr = [1, 3, 10, 5, 23, 3];

let solve = function (arr, k) {
  let i = 0;
  let j = 0;
  let sum = arr[0];

  while (j < arr.length) {
    if (sum == k) {
      let ans = [];
      for (let x = i; x <= j; x++) {
        ans.push(arr[x]);
      }
      return ans;
    } else if (sum > k) {
      sum = sum - arr[i];
      i++;
    } else {
      j++;
      if (j < arr.length) sum = sum + arr[j];
    }
  }
  return [-1];
};

console.log(solve(arr, 38)); // [10,5,23];

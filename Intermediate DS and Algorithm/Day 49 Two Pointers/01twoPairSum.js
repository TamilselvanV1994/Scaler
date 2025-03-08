// a given sorted array find the pair sum k

let arr = [1, 2, 3, 4, 5, 6];

let solve = function (arr, k) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    sum = arr[i] + arr[j];
    if (sum == k) return true;
    if (sum > k) j--;
    else i++;
  }
  return false;
};

console.log(solve(arr, 7)); // ture
console.log(solve(arr, 10)); // ture
console.log(solve(arr, 1)); // false

// TC: O(n)
// SC: O(1)

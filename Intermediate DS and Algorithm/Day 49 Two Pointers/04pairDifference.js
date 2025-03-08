// given sorted array k, find the pair difference A[j] - A[i] = K, i!=j, K > 0;

let arr = [-2, 0, 1, 3, 10, 20, 23];

let solve = function (arr, k) {
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    diff = arr[j] - arr[i];
    if (diff == k) return true;
    if (diff < k) j++;
    else {
      i++;
      if (i == j) j = j + 1;
    }
  }
  return false;
};

console.log(solve(arr, 9)); //true;
console.log(solve(arr, 5)); //true;
console.log(solve(arr, 6)); //true;

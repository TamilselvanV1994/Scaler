// given sorted array k, find the pair difference A[j] - A[i] = K, i!=j, K > 0;

let arr = [1, 2, 3, 4, 5];

let solve = function (arr, k) {
  let i = 0;
  let j = 1;
  let count = 0;

  while (j < arr.length) {
    diff = arr[j] - arr[i];
    if (diff == k) count++;
    if (diff < k) j++;
    else {
      i++;
      if (i == j) j = j + 1;
    }
  }
  return count;
};

console.log(solve(arr, 3)); //2

console.log(
  solve(
    [8, 12, 16, 4, 0, 20].sort((a, b) => a - b),
    4
  )
); //5

let arr1 = [5, 4, 3, 2, 1];
arr1.sort((a, b) => a - b);
console.log(arr1);

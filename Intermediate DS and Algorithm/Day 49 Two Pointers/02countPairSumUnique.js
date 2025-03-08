// Give sorted array Count a pair sum K with for unique array elements

let arr = [1, 3, 10, 23, 30];

let solve = function (arr, k) {
  let i = 0;
  let j = arr.length - 1;
  let count = 0;

  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum == k) count++;
    if (sum > k) j--;
    else i++;
  }
  return count;
};

console.log(solve(arr, 33)); //2

// TC - O(n);
// SC - O(1);p?:/;p.'=.[p;]

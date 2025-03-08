// Given sorted array with duplicate value or same repeted value find the count of pair sum K

let arr = [1, 3, 3, 10, 23, 30, 30];

let solve = function (arr, k) {
  let i = 0;
  let j = arr.length - 1;
  let ans = 0;

  while (i < j) {
    let sum = arr[i] + arr[j];

    if (sum == k) {
      if (arr[i] == arr[j]) {
        let count = j - i + 1;
        ans = ans + (count * (count - 1)) / 2;
        break;
      }

      let counti = 0;
      for (let x = i; x < j; x++) {
        if (arr[x] == arr[i]) counti++;
        else break;
      }
      let countj = 0;
      for (let x = j; x > i; x--) {
        if (arr[x] == arr[j]) countj++;
        else break;
      }
      ans = ans + counti * countj;
      i = i + counti;
      j = j - countj;
    } else if (sum > k) j--;
    else i++;
  }
  return ans;
};

console.log(solve(arr, 33)); //5
console.log(solve([10, 10, 10, 10, 30], 20)); //6

// TC - O(n)
// SC - O(1)

// give array find the subarray can store max rain water

let arr = [3, 8, 7, 4, 6, 4, 2];

let solve = function (arr) ``````````
  let l = 0;
  let r = arr.length - 1;
  let ans = 0;
  while (l < r) {
    let ht = Math.min(arr[l], arr[r]);
    let w = r - l;
    ans = Math.max(ans, ht * w);
    if (arr[l] < arr[r]) {
      l++;
    } else r--;
  }
  return ans;
};

console.log(solve(arr)); //18

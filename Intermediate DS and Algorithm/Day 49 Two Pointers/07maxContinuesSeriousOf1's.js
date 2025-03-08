// given binary array replance B number of 0 and return the max length of serious.

let arr = [1, 1, 0, 1, 1, 0, 0, 1, 1, 1];

let solve = function (Arr, B) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let zeroCount = 0;
  let betStart = 0;
  let n = Arr.length;

  while (end < n) {
    if (Arr[end] === 0) {
      zeroCount++;
    }
    while (zeroCount > B) {
      if (Arr[start] === 0) {
        zeroCount--;
      }
      start++;
    }

    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      betStart = start;
    }
    end++;
  }
  let result = [];
  for (let i = betStart; i < betStart + maxLength; i++) {
    result.push(i);
  }
  return result;
};

console.log(solve(arr, 1)); //[0,1,2,3,4]
console.log(solve([1, 0, 0, 0, 1, 0, 1], 2)); //[3,4,5,6]

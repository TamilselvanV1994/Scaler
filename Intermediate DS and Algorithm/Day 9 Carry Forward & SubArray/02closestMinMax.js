let solve = function (A) {
  let min = Math.min(...A);
  let max = Math.max(...A);
  let n = A.length;

  if (min == max) return 1;

  let ans = n;

  for (let i = 0; i < n; i++) {
    if (A[i] == min) {
      for (let j = i + 1; j < n; j++) {
        if (A[j] == max) {
          ans = Math.min(ans, j - i + 1);
          break;
        }
      }
    }

    if (A[i] == max) {
      for (let j = i + 1; j < n; j++) {
        if (A[j] == min) {
          ans = Math.min(ans, j - i + 1);
          break;
        }
      }
    }
  }

  return ans;
};

console.log(solve([2, 2, 6, 4, 5, 1, 5, 2, 6, 4, 1, 3])); // 3

console.log(solve([2, -1, 7, 4, 5, 1, 9, 2, 6, 4, 1, 3])); //6

console.log(solve([1, 1, 1])); //1

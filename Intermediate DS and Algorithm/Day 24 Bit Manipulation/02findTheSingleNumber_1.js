let solve = function (A) {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < A.length; j++) {
      if ((A[j] & (1 << i)) > 0) {
        count++;
      }
    }
    if ((count & 1) == 1) {
      ans = ans | (1 << i);
    }
  }
  return ans;
};

console.log(solve([3, 2, 3, 7, 2, 8, 7])); // 8

console.log(solve([1, 5, 2, 1, 9, 2, 5])); //9

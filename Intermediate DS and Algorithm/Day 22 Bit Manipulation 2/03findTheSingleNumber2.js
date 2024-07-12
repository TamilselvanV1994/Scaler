let solve = function (A) {
  let n = A.length;
  let result = 0;

  for (let i = 0; i < 32; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if ((A[j] & (1 << i)) > 0) {
        count++;
      }
    }
    if (count % 3 != 0) {
      result = result | (1 << i);
    }
  }

  return result;
};

console.log(solve([1, 1, 1, 2, 2, 2, 4, 4, 4, 6])); //6

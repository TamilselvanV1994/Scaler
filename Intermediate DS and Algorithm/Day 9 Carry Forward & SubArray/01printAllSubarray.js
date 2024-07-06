let solve = function (A) {
  A.sort();
  let ans = [];
  let n = A.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let subArray = [];
      for (let k = i; k <= j; k++) {
        subArray.push(A[k]);
      }
      ans.push(subArray);
    }
  }

  ans.map((array) => console.log(array));
};

solve([3, 2, 1]);

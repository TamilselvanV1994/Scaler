// RainWater Trapped

let solve = function (A) {
  let n = A.length;
  let lmax = new Array(n).fill(0);
  let rmax = new Array(n).fill(0);
  let max = 0;

  // Creating a left max

  lmax[0] = A[0];
  for (let i = 1; i < n; i++) {
    if (A[i] > lmax[i - 1]) {
      lmax[i] = A[i];
    } else lmax[i] = lmax[i - 1];
  }

  // creating a right max
  rmax[n - 1] = A[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    if (A[j] > rmax[j + 1]) {
      rmax[j] = A[j];
    } else rmax[j] = rmax[j + 1];
  }

  // water trape

  water = 0;
  for (let k = 0; k < n; k++) {
    let l = lmax[k];
    let r = rmax[k];
    water += Math.min(l, r) - A[k];
  }

  return water;
};

console.log(solve([0, 1, 0, 2])); // 1
console.log(solve([2, 1, 3, 2, 1, 2, 4, 3, 2, 1, 3, 1])); // 8

//0 1 1 2 = lmax
//2 2 2 2

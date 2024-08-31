let solve = function (A) {
  let n = A.length;
  let map = new Map();

  // building the map for the array frequecy
  for (let i = 0; i < n; i++) {
    if (map.has(A[i]) == true) {
      let of = map.get(A[i]);
      let nf = of + 1;
      map.set(A[i], nf);
    } else map.set(A[i], 1);
  }

  // iterating the array element and finding their first non repeating frequency
  for (let i = 0; i < n; i++) {
    if (map.get(A[i]) == 1) {
      return `Element ${A[i]} is the first non-repeting element in the Array`;
    }
  }
  return -1;
};

console.log(solve([1, 2, 3, 1, 2, 5])); //3

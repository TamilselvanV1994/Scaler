let arr = [1, 2, 3, 4, 5, 6];
let query = [
  [1, 3],
  [0, 5],
  [4, 5],
  [5, 5],
];

function rangeSum(arr, query) {
  for (let i = 0; i < query.length; i++) {
    let start = query[i][0];
    let end = query[i][1];
    let sum = 0;
    for (let j = start; j <= end; j++) {
      sum = sum + arr[j];
    }
    console.log(sum);
  }
}

rangeSum(arr, query);

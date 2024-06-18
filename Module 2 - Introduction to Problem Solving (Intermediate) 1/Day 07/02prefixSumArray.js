let arr = [1, 2, 3, 4, 5, 6];

function prefixSumArray(arr) {
  let prefixArray = new Array(arr.length);
  prefixArray[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    prefixArray[i] = prefixArray[i - 1] + arr[i];
  }
  return prefixArray;
}

console.log("OriginalArray:", arr);
console.log("prefixSumArray:", prefixSumArray(arr));

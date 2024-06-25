let longestCommonPrefix = function (A) {
  let n = A.length;
  let prefix = "";
  let index = 0;

  for (let i = 0; i < n; i++) {
    if (A[i][index]) console.log(i, prefix);
  }
  return prefix;
};

console.log(longestCommonPrefix(["abcdefgh", "aefghijk", "abcefgh"]));

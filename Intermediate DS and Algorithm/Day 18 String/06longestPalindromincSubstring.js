let solve = function (A) {
  //Palindrom function

  function isPalindrome(subString, start, end) {
    while (start < end) {
      if (A[start] != A[end]) {
        return false;
      } else {
        start++;
        end--;
      }
    }
    return true;
  }

  let longString = "";
  let ans = 0;
  let n = A.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isPalindrome(A, i, j)) {
        let currLongString = A.substring(i, j + 1);
        if (longString.length < currLongString.length) {
          longString = currLongString;
        }
      }
    }
  }

  return longString;
};

console.log(solve("aaaabaaa"));

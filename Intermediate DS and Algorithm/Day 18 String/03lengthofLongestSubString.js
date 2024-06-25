//Calculate the lenght of longest palindromic substring from the give input string (not optimal approch)
let solve = function (string) {
  // Palindrome function start
  function isPalindrome(subStr, startI, endI) {
    while (startI < endI) {
      if (subStr[startI] != subStr[endI]) {
        return false;
      } else {
        startI++;
        endI--;
      }
    }
    return true;
  }
  // funciton End

  let ans = 0;
  let n = string.length;

  // itreate the substring one by one in the give string
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // checke the evey substring is a palindrom by giving it start index and end index
      if (isPalindrome(string, i, j)) {
        ans = Math.max(ans, j - i + 1); // j-i+1 is the length of the substring
      }
    }
  }
  return ans;
};

console.log(solve("anamadambxe")); //5

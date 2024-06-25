// Polindrom, it will get the input as string and retur trure if the string is palindrom, otherwise return false.
let solve = function (string) {
  let end = string.length - 1;
  let start = 0;

  // set the exit condition
  while (start < end) {
    //checking the First char of the string with last char of the string (it's the palindrome case)
    if (string[start] != string[end]) {
      return false;
    } else {
      // increase the start and end index of the character
      start++;
      end--;
    }
  }
  return true;
};

console.log(solve("malayalam")); // true

console.log(solve("Tamilselvan V")); // false

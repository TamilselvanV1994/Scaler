let solve = function (A) {
  let n = A.length;
  let word = "";
  let newWord = "";

  for (let i = n - 1; i >= 0; i--) {
    //console.log(A[i]);
    if (A[i] != " ") {
      word = A[i] + word;
    } else {
      //word = " " + word;
      //continue;
      //return word;
      newWord = newWord + (word + " ");
      word = "";
    }
  }
  newWord = newWord + word;
  return newWord.trim();
};

console.log(solve("the sky is blue")); // blue is sky the

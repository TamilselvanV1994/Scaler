// Get the input string and toggle the every string char (lower to upper and upper to lower)
let solve = function (string) {
  let n = string.length;
  let newString = "";
  //iterating the every indual string character
  for (let i = 0; i < n; i++) {
    // checking the string character if it is uppercase
    if (string[i] == string[i].toUpperCase()) { 
      newString += string[i].toLowerCase();
    } else {
      newString += string[i].toUpperCase();
    }
  }
  return newString;
};

console.log(solve("Hello")); //hELLO
console.log(solve("Pavendhan"));

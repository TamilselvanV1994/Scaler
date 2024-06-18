// Add two Binary input strings and return a String output

//1 <= length of A <= 105
//1 <= length of B <= 105

function addBinary(A, B) {
  // Get the last index of the input string
  let i = A.length - 1;
  let j = B.length - 1;

  let ans = "";
  let sum = 0;
  let carry = 0;

  // Define a condition
  while (i >= 0 || j >= 0 || carry == 1) {
    //assing the carry value to sum for every iteration
    sum = carry;
    if (i >= 0) {
      //Adding the last index number with sum
      sum = sum + Number(A[i]);
    }
    if (j >= 0) {
      //Adding the last index number with sum
      sum = sum + Number(B[j]);
    }
    // Modulas the sum with 2 and get reminer then add it with to ans
    ans = ans + String(sum % 2);
    //To get the carry divide the sum with 2
    carry = Math.floor(sum / 2);
    //Decresing the index to iterate on input string through backward.
    i--;
    j--;
  }
  return ans.split("").reverse().join("");
}

console.log(addBinary("1010110111001101101000", "1000011011000000111100110"));

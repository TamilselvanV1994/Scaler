// Get the integer as input and return the how sets(1) present in the given input as binary repersentation

let solve = function (A) {
  // checkSet Bit fucion get the decimal value with index i and check the i th bit is set or not
  function CheckSetBit(A, i) {
    if ((A & (1 << i)) > 0) {
      return true;
    } else return false;
  }

  ans = 0;

  // iterting on the every bits and found the count of set's
  for (let i = 0; i < 32; i++) {
    if (CheckSetBit(A, i)) {
      ans++;
    }
  }

  return ans;
};

console.log(solve(10)); // 1010 // 2 set bits
console.log(solve(13)); // 3

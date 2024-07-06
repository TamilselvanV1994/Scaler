// Unset the i th set bit

let solve = function (A, i) {
  //checkset

  function checkSetBit(A, i) {
    if ((A & (1 << i)) > 0) return true;
    else return false;
  }

  if (checkSetBit(A, i) === true) {
    A = A ^ (1 << i);
  }

  return A;
};

console.log(solve(10, 3)); //input 1010 output 0010

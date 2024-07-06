// check the setbit using other approch

let solve = function (A) {
  let ans = 0;
  while (A > 0) {
    if (A & (1 == 1)) {
      ans++;
    }
    A = A >> 1;
  }
  return ans;
};

console.log(solve(10)); // 2 set's
console.log(solve(8)); //1

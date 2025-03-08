// Given integer N Generate all the valid parantheis of size 2*N

let solve = function (str, N, opening, closing) {
  if (str.length === 2 * N) {
    console.log(str);
    return;
  }
  if (opening < N) {
    solve(str + "(", N, opening + 1, closing);
  }
  if (closing < opening) {
    solve(str + ")", N, opening, closing + 1);
  }
};

solve("", 2, 0, 0); // (()), ()()

solve("", 1, 0, 0); // ()

// TC - O(2^N) Since we are using 2 calls for every iteration
// SC  - O(2 * N) Since we required 2 * N call stacks for recursive stack

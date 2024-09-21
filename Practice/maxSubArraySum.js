// find the Maximum Sub Array sum in the given array
// Bruteforce approch

// let input = [1, 2, 3];
// let n = input.length;

// ans = -Infinity;

// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     let sum = 0;
//     for (let k = i; k <= j; k++) {
//       sum = sum + input[k];
//     }
//     if (sum > ans) ans = sum;
//   }
// }

// console.log(ans);

//TC: O(n^3);
//SC: O(1)
//----------------------------------------------

// let input = [1, 2, 3];
// let n = input.length;

// ans = -Infinity;

// // Optimization prefix sum

// let prefixInput = new Array(n);

// prefixInput[0] = input[0];
// for (let i = 1; i < n; i++) {
//   prefixInput[i] = prefixInput[i - 1] + input[i];
// }

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     if (i == 0) sum = prefixInput[j];
//     else {
//       sum = prefixInput[j] - prefixInput[i - 1];
//     }
//     if (sum > ans) ans = sum;
//   }
// }

// console.log(ans);

// // TC: O(n^2);
// // SC: O(n);
//------------------------------------------------

// contrubution technique

let arr = [1, 2, 3];
let n = arr.length;
let sum = 0;
for (let i = 0; i < n; i++) {
  let contribute = (i + 1) * (n - i);
  sum = sum + contribute * arr[i];
}

console.log(sum);

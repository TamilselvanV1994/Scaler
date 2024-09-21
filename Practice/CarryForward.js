//count pari 'ag'

let input = ["b", "a", "a", "g", "d", "c", "a", "g"];

let count = 0;
let n = input.length;

//---------------------------------------------

// for (let i = 0; i < n; i++) {
//   for (let j = i + 1; j < n; j++) {
//     if (input[i] === "a" && input[j] === "g") {
//       count++;
//     }
//   }
// }

// console.log(count);

// TC : O(n^2)
// SC : O(1)
//--------------------------------------------------------------

// for (let i = 0; i < n; i++) {
//   if (input[i] === "a") {
//     for (let j = i + 1; j < n; j++) {
//       if (input[j] === "g") {
//         count++;
//       }
//     }
//   }
// }

// console.log(count);

//TC - O(n^2)
//SC - O(1)
//-----------------------------------------------------------------

// Carry forward technique

let carry = 0;

for (let i = n - 1; i >= 0; i--) {
  if (input[i] === "g") carry++;
  if (input[i] === "a") count = count + carry;
}

console.log(count);

//TC - O(n)
//SC - O(1)

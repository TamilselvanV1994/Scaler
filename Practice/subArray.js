// Sub Arrray

// let input = [1, 2, 3];
// let n = input.length;

// print all subArrays

// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     let subArray = [];
//     for (let k = i; k <= j; k++) {
//       subArray.push(input[k]);
//     }
//     console.log(subArray);
//   }
// }

// TC: O(n^3)
// SC: O(1)

//--------------------------------------------

//smallest subArray which contains both min and max

// let inputArr = [1, 2, 3, 1, 3, 4, 6, 4, 6, 3];
// let m = inputArr.length;
// let result = m;

// min  = 1
// max = 6

// let min = Math.min(...inputArr);
// let max = Math.max(...inputArr);

// if (min === max) return 1;

// for (let i = 0; i < m; i++) {
//   if (inputArr[i] == min) {
//     for (let j = i + 1; j < m; j++) {
//       if (inputArr[j] == max) {
//         result = Math.min(result, j - i + 1);
//       }
//     }
//   }

//   if (inputArr[i] == max) {
//     for (let j = i + 1; j < m; j++) {
//       if (inputArr[j] == min) {
//         result = Math.min(result, j - i + 1);
//       }
//     }
//   }
// }

// console.log(result);

//TC - O(n^2)
//SC - O(1);
//-----------------------------------------------------------

// carry forward technique

//let input = [1, 2, 3, 1, 3, 4, 6, 4, 6, 3];

let input = [1, 2, 6, 1, 3];
let n = input.length;
let result = n;

let mini = -1;
let maxi = -1;

let max = Math.max(...input);
let min = Math.min(...input);

for (let i = n - 1; i >= 0; i--) {
  if (input[i] == max) {
    maxi = i;
    if (mini != -1) {
      result = Math.min(result, mini - maxi + 1);
    }
  }

  if (input[i] == min) {
    mini = i;
    if (maxi != -1) {
      result = Math.min(result, maxi - mini + 1);
    }
  }
}

console.log(result);

//-- TC - O(n)
//-- SC - O(1);

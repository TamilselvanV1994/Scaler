// find the max sub array sum

// let arr = [1, 2, 3, 4, 5];

// Bf - find all the sub array and itrate and get subArray sum

// let n = arr.length;
// let subArray = [];

// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     let temp = [];
//     for (let k = i; k <= j; k++) {
//       temp.push(arr[k]);
//     }
//     subArray.push(temp);
//   }
// }

// subArray.map((ele) => console.log(ele));

//------------------------------------------------------------

// let arr = [1, 2, 3, 4, 5];

// let n = arr.length;

// let maxSum = -Infinity;

// for (let i = 0; i < n; i++) {
//   for (let j = i; j < n; j++) {
//     let subArraySum = 0;
//     for (let k = i; k <= j; k++) {
//       subArraySum = subArraySum + arr[k];
//     }

//     if (maxSum < subArraySum) maxSum = subArraySum;
//   }
// }

// console.log(maxSum);

// TC - O(n^3)
// SC - O(n)

//------------------------------------------------------------

// prefix sum approch

// let arr = [1, 2, 3, 4, 5];

// creating prefix array

// let pfArr = new Array(arr.length);

// pfArr[0] = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   pfArr[i] = pfArr[i - 1] + arr[i];
// }

// let maxSubArraySum = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i; j < arr.length; j++) {
//     let sum = 0;
//     if (i == 0) sum = pfArr[j];
//     else {
//       sum = pfArr[j] - pfArr[i - 1];
//     }
//     if (maxSubArraySum < sum) maxSubArraySum = sum;
//   }
// }

// console.log(maxSubArraySum);

// TC  - O(n^2);
// SC - O(n) // since we used prefix array

//------------------------------------------------------------

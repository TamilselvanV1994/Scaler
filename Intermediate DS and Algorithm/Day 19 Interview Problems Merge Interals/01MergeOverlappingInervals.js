//Get the overlaping sorted array as input and return the merged non overlaping array
let solve = function (A) {
  // intially we take the first array as start and end
  let curStart = A[0][0];
  let curEnd = A[0][1];

  let result = [];

  for (let i = 1; i < A.length; i++) {
    // checking the first interval end point with second interval start point
    if (A[i][0] <= curEnd) {
      //if it's overlapping take min and max of first and second intervals and store it.
      curStart = Math.min(curStart, A[i][0]);
      curEnd = Math.max(curEnd, A[i][1]);
    } else {
      // if it's not overlaping push it to the result
      result.push([curStart, curEnd]);
      curStart = A[i][0];
      curEnd = A[i][1];
    }
  }
  // push the last intervals explicitly
  result.push([curStart, curEnd]);

  //console.log(result);
  result.map((array) => console.log(array));
};

solve([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]); //[ [1, 6], [8, 10], [15, 18] ]

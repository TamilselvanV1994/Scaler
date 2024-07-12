// given N array elements choose two indicis i,j such that i!=j and A[i]&A[j] is maximum(find maximum) // Maximum AND pair

let solve = function (A) {
  let n = A.length;

  let ans = 0;

  //finding the number of set bits present in the MSB
  for (let i = 31; i >= 0; i--) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if ((A[j] & (1 << i)) > 0) {
        count++;
      }
    }

    //Chcking the count if it's greater than 2 then only we can make a sets
    if (count >= 2) {
      ans = ans | (1 << i);
      for (let j = 0; j < n; j++) {
        if ((A[j] & (1 << i)) == 0) {
          A[j] = 0; // change (terminating) the element as 0 since the MSB i the bit is not set and we dont need it's contribution going the the next step
        }
      }
    }
  }

  return ans.toString(2);
};

console.log(solve([27, 18, 20])); // 27 & 10--> 10010

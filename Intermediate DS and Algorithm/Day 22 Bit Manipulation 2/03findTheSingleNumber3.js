// Given interger array A, all the elements will occur twice except two elements, find those distinct element

let solve = function (A) {
  let n = A.length;
  let val = 0;
  let idx = 0;

  //Take a XOR of all the elements
  for (let i = 0; i < n; i++) {
    val = val ^ A[i];
  }

  // val is the xor of those two distinct elements

  // check the first setbit appers in the val

  for (let i = 0; i < 32; i++) {
    if ((val & (1 << i)) > 0) {
      idx = i;
      break;
    }
  }

  //split the entire array on the idx basic

  let set = 0,
    unset = 0;

  for (let i = 0; i < n; i++) {
    let ele = A[i];
    if (ele & (1 << idx > 0)) set = set ^ ele;
    else unset = unset ^ ele;
  }

  console.log(set, unset);
};

solve([4, 5, 4, 5, 2, 1]); // 2,1

solve([1, 1, 2, 2, 3, 3, 4, 5]); // 4,5

solve([10, 11, 10, 11, 23, 22]); //23,23

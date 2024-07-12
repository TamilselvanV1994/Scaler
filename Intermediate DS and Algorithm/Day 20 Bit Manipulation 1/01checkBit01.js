let solve = function (A, B) {
  // //if((A&(1<<B))>0){
  //     return 1;
  // }
  // else return 0;
  return (A >> B) & 0x01;
};

console.log(solve(4, 2));

//convert decimal input nuber to binary number
function dicimalToBinary(number) {
  let ans = 0;
  let mul = 1;
  //Checking the intial condition if Number > 0
  while (number > 0) {
    // find the reminder from the number 10 modulaus  2 we get 0 as reminder
    let rem = number % 2;
    // divide the number 10 / 2 and get the 5 and store it number.
    number = Math.floor(number / 2);
    // multiple the reminder wiht mul 1 (0*1) inially, and add it to the ans
    ans = ans + rem * mul;
    //incresing the mul value at every iteration.
    mul = mul * 10;
  }
  return ans;
}

console.log(dicimalToBinary(10));

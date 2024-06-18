// Convert the give input binary number into the deciaml number
function binaryToDecimal(binary) {
  let ans = 0;
  let mul = 1;

  // Exectue if the binaly is greater than 0
  while (binary > 0) {
    // Extract the last digit from the give input 101=> 101 % 10, we get  1
    let rem = binary % 10;

    // multipling the reminder 1 with initial mulitiplier 1 (since the inial(last) digit in binary should 2 power 0 it's returs 1)
    // Then adding rem*mul with inital ans
    ans = ans + rem * mul;

    //Once we extract the number 1 from 101 we reduce it for next iteration and it give 101/10=>10.5 using Math.floor we will get 10.
    binary = Math.floor(binary / 10);

    // Typically, every iteration the extracted digits needs to multiply with 2.
    mul = mul * 2;
  }
  return Math.ceil(ans);
}

console.log(binaryToDecimal(101)); // input 3 in decimal

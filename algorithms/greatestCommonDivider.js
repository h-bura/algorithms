function greatestCommonDivider(number1, number2) {
  let divisor = 1;
  let smallestNumber = Math.min(number1, number2);

  for (let i = 2; i <= smallestNumber; i++) {
    if (number1 % i == 0 && number2 % i == 0) {
      divisor = i;
    }
  }

  return divisor;
}

module.exports = {
  greatestCommonDivider,
};

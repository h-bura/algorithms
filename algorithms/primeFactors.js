//How could you find all prime factors of a number?

function primeFactors(number) {
  let result = [];
  let divisor = 2;
  while (number > 2) {
    if (number % divisor === 0) {
      result.push(divisor);
      number = number / divisor;
    }
    divisor++;
  }
  return result;
}
module.exports = {
  primeFactors,
};

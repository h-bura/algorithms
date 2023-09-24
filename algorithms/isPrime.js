//How would you verify a prime number?
function isPrime(number) {
  let divisor = 2;
  let limit = Math.sqrt(number); //returns the square root of a number
  while (limit >= divisor) {
    if (number % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
}
module.exports = {
  isPrime,
};

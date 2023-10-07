//Count Total number of zeros from 1 upto n?
//Example countZero(50)=>5

function countZero(n) {
  let count = 0;
  while (n > 1) {
    count += Math.floor(n / 10);
    n = n / 10;
  }
  return count;
}
module.exports = {
  countZero,
};

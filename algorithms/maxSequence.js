/*https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
Example:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
*/

function maxSequence(arr) {
  let sum = 0;
  let maxSum = 0;
  if (arr.length === 0) {
    return 0;
  }
  arr.forEach((num) => {
    sum = Math.max(num, sum + num);
    maxSum = Math.max(maxSum, sum);
  });
  return maxSum;
}
module.exports = {
  maxSequence,
};

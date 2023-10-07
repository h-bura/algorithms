// How would you find the largest sum of any two elements?
//Example largestSum([1, 5, 8, 9, 6, 7, 2, 3])=>17
function largestSum(arr) {
  arr.sort((a, b) => b - a);

  return arr[0] + arr[1];
}

module.exports = {
  largestSum,
};

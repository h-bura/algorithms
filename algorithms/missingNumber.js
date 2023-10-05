//You have an array of numbers 1 to 100 in an array. Only one number is missing in the array. The array is unsorted. Find the missing number.
//Example [1,5,8,9,6,7,2,3] =>4
function missingNumber(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return 0;
}

module.exports = {
  missingNumber,
};

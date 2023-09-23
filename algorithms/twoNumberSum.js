//Write a function that takes two parameters: A non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the array sum up to the target sum, the function should return them in an array. If no two numbers sum up to the target sum, the function should return an empty array.
function twoNumberSum(array, sumNumber) {
  for (let i = 0; i < array.length; i++) {
    for (let x = 1; x < array.length; x++) {
      if (array[i] + array[i + x] === sumNumber) return sumNumber;
    }
  }
  return [];
}

module.exports = {
  twoNumberSum,
};

//How would you merge two sorted array?
//Example mergeSortedArray([2,5,6,9], [1,2,3,29]) => [1, 2, 2, 3, 5, 6, 9, 29]

function mergeSortedArray(array1, array2) {
  if (array1.length == 0) {
    return array2;
  }
  if (array2.length == 0) {
    return array1;
  }
  let result = [];
  result = array1 + "," + array2;
  return result.split(",").sort((a, b) => a - b);
}

module.exports = {
  mergeSortedArray,
};

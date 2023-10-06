// From a unsorted array, check whether there are any two numbers that will sum up to a given number?
//Example sumFinder([6,4,3,2,1,7], 9)=> true / sumFinder([6,4,3,2,1,7], 2) => false
function sumOfTwo(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] == sum) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  sumOfTwo,
};

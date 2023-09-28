//How would you remove duplicate members from an array?
//Example removeDuplicate([1,3,3,3,1,5,6,7,8,1])=> [1, 3, 5, 6, 7, 8]
function removeDuplicate(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

module.exports = {
  removeDuplicate,
};

/*
https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

(Delete occurrences of an element if it occurs more than n times)
Example
deleteNth([20,37,20,21], 1)  => [20,37,21]
deleteNth([1,1,3,3,7,2,2,2,2], 3) => [1, 1, 3, 3, 7, 2, 2, 2]
*/

function deleteNth(arr, n) {
  let result = arr.reduce(
    (num, cur) =>
      num.filter((i) => i === cur).length < n ? [...num, cur] : num,
    []
  );
  return result;
}
module.exports = {
  deleteNth,
};

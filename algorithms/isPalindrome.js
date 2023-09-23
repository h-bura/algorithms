//An algorithm to identify if a word is a palindrome or not could be:

function isPalindrome(word) {
  let result = word.toLowerCase();

  let left = 0;
  let right = result.length - 1;

  while (left < right) {
    if (result[left] !== result[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = {
  isPalindrome,
};

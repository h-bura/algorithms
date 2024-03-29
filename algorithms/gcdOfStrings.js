/*https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75
For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""*/

function gcdOfStrings(str1, str2) {
  let result = "";
  let maxLength = Math.max(str1.length, str2.length);

  for (let i = 0; i < maxLength; i++) {
    if (str1[i] === str2[i] && !result.includes(str1[i])) {
      result += str1[i];
    } else {
      break;
    }
  }
  return result;
}

module.exports = {
  gcdOfStrings,
};

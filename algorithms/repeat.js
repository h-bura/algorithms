//https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str) {
  //empty string true
  if (str.length === 0) {
    return true;
  }
  //ignore case
  let repeatedArray = [];
  let sentence = str.toLowerCase().split("");
  for (let i = 0; i < sentence.length; i++) {
    if (!repeatedArray.includes(sentence[i])) {
      repeatedArray.push(sentence[i]);
    }
  }
  return repeatedArray.length === str.length;
}

module.exports = {
  isIsogram,
};

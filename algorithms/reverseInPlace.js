//If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

function reverseInPlace(str) {
  let splitStr = str.split(" ");
  let result = [];
  for (let i = 0; i < splitStr.length; i++) {
    result.push(splitStr[i].split("").reverse().join(""));
  }
  return result.join(" ");
}

module.exports = {
  reverseInPlace,
};

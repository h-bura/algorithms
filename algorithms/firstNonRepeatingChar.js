//How could you find the first non repeating char in a string?
//Example  firstNonRepeatChar('the quick brown fox jumps then quickly blow air')=>"f"
function firstNonRepeatingChar(str) {

    let charCount = {};
  
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for (let j = 0; j < str.length; j++) {
      let char = str.charAt(j);
      if (charCount[char] === 1) {
        return char;
      }
    }
  
    
    return null;
  }
  module.exports = {
    firstNonRepeatingChar,
  };
  
//How will you remove duplicate characters from a sting?
//Example  removeDuplicateChar("the quick brown fox jumps then quickly blow air")=>"fxjmpsya"

function removeDuplicateChar(str) {
    let charCount = {};
  let result=[]
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
    for(let x in charCount){
        if(charCount[x]==1){
            result.push(x)
        }
    }
    return result.join("")
}
module.exports = {
    removeDuplicateChar,
  }; 
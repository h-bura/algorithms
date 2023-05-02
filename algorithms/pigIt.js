/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  let split = str.split(" ");
  return split
    .map((item) => {
      if (!item.match(/^[.,:!?]/)) {
        item = item + item[0] + "ay";
        item = item.substring(1);
      }
      return item;
    })
    .join(" ");
}

module.exports = {
  pigIt,
};

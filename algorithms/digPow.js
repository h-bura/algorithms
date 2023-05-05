//https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  let total = 0;
  let arrayNumber = [...(n + "")].map((item) => +item);
  for (let i = 0; i < arrayNumber.length; i++) {
    total += Math.pow(arrayNumber[i], p + i);
  }

  if (Number.isInteger(total / n) && total / n >= 1) {
    return total / n;
  } else {
    return -1;
  }
}

module.exports = {
  digPow,
};

const express = require("express");
const app = express();
const func = require("./algorithms/isPalindrome");

const result = func.isPalindrome("NeUquEn");
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

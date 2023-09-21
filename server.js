const express = require("express");
const app = express();
const func = require("./algorithms/gcdOfStrings");

const result = func.gcdOfStrings("ABC", "ABCDE");
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

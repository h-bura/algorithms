const express = require("express");
const app = express();
const func = require("./algorithms/reverseInPlace");

const result = func.reverseInPlace("I am the good boy");
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

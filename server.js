const express = require("express");
const app = express();
const func = require("./algorithms/pigIt");

const result = func.pigIt("Hello world !");
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

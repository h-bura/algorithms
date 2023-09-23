const express = require("express");
const app = express();
const func = require("./algorithms/twoNumberSum");

const result = func.twoNumberSum([10, 2, 3, 5, 6], 15);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

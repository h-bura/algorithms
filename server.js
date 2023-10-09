const express = require("express");
const app = express();
const func = require("./algorithms/twoSum");

const result = func.twoSum([2, 7, 11, 15], 9);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

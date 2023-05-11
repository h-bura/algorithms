const express = require("express");
const app = express();
const func = require("./algorithms/maxSequence");

const result = func.maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

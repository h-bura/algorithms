const express = require("express");
const app = express();
const func = require("./algorithms/removeDuplicateChar");

const result = func.removeDuplicateChar("the quick brown fox jumps then quickly blow air");
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

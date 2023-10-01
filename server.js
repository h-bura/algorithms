const express = require("express");
const app = express();
const func = require("./algorithms/firstNonRepeatingChar");

const result = func.firstNonRepeatingChar("the quick brown fox jumps then quickly blow air");
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

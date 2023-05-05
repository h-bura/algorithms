const express = require("express");
const app = express();
const func = require("./algorithms/enoughIsEnough");

const result = func.deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

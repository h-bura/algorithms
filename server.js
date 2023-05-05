const express = require("express");
const app = express();
const func = require("./algorithms/digPow");

const result = func.digPow(89, 1);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

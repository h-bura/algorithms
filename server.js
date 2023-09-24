const express = require("express");
const app = express();
const func = require("./algorithms/isPrime");

const result = func.isPrime(29);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

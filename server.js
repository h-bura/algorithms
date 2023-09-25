const express = require("express");
const app = express();
const func = require("./algorithms/primeFactors");

const result = func.primeFactors(55);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

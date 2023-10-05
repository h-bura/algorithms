const express = require("express");
const app = express();
const func = require("./algorithms/missingNumber");

const result = func.missingNumber([1, 5, 8, 9, 6, 7, 2, 3]);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

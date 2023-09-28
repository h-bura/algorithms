const express = require("express");
const app = express();
const func = require("./algorithms/mergeSortedArray");

const result = func.mergeSortedArray([28], [1, 2, 3, 29]);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

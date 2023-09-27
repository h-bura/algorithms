const express = require("express");
const app = express();
const func = require("./algorithms/greatestCommonDivider");

const result = func.greatestCommonDivider(21, 14);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

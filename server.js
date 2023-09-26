const express = require("express");
const app = express();
const func = require("./algorithms/fibonicce");

const result = func.fibonicce(5);
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

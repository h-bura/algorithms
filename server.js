const express = require("express");
const app = express();
const func = require("./algorithms/repeat.js");

const result = func.isIsogram("Dermatoglyphics");
console.log({ result });
const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

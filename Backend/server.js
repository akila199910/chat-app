const express = require("express");
const app = express();
app.get("/", (req, res) => {
  //root route http://localhost:5000
  res.send("hello world 1111");
});
app.listen(5000, () => {
  console.log("server running at port 5000 ..111..");
});

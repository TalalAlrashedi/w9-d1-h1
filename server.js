const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, "127.0.0.1",() => {
  console.log("Server running on 127.0.0.1");
});

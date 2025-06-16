const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/image", (req, res) => {
  res.redirect("/image.jpg");
});

app.listen(3000, "127.0.0.1", () => {
  console.log("🚀 Server running on http://localhost:3000");
});
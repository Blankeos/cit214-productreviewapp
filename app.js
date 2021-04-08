const express = require("express");
const app = express();
const port = 3000;

app.get("/api/test", (req, res) => {
  res.send("Testing... /api/test is working...");
});

app.get("/api/test2", (req, res) => {
  res.send("Testing... /api/test2 is working...");
});

app.listen(port, () => {
  console.log("App is running on port 3000");
  console.log(`Click here: http://localhost:${port}`);
});

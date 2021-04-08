const express = require("express");
const app = express();
const port = 5000;

app.get("/api/test", (req, res) => {
  res.send("Testing... /api/test is working...");
});

app.get("/api/test2", (req, res) => {
  res.send("Testing... /api/test2 is working...");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Click here: http://localhost:${port}`);
});

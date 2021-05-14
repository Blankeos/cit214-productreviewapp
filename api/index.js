const dotenv = require("dotenv").config();

// Import middlewares:
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const decodeIDToken = require("../lib/authenticateToken");

// Import express stuff:
const express = require("express");

// Import Mongoose:
const mongoose = require("mongoose");
const app = express();

// Import database models:
const Product = require("../lib/models/products.js");

//Connect to Mongoose:
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err.message));

mongoose.set("useCreateIndex", true);

// Add middlewares
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(decodeIDToken);

// Configure Routes:
const router = require("./routes.js");
app.use("/api", router);

// Start the server
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
//   console.log(`Click here: http://localhost:${port}`);
// });

module.exports = app;

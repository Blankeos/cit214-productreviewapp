require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

// import User from ("../lib/models/users.js");

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

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err.message));

mongoose.set("useCreateIndex", true);

// // Passport stuff:
// passport.use(User.createStrategy());
// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: `http://localhost:${env.process.PORT}/auth/google/<callback>`,
//     },
//     function (accesstoken, refreshToken, profile, cb) {
//       console.log(profile);
//       User.findOrCreate({ googleId: profileid }, function (err, user) {
//         return cb(err, user);
//       });
//     }
//   )
// );

app.get("/api/login", (req, res) => {
  console.log("Someone fetched /api/login");
});

app.post("/api/login", (req, res) => {
  console.log("Someone posted to /api/login");
  console.log(req.body);
  res.end("Success");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Click here: http://localhost:${port}`);
});

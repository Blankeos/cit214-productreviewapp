require("dot-env").config;

const express = require("express");
const bodyParser = require("body-parser");

const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const port = process.env.PORT || 3000;
const app = express();

import mongoose from "../lib/db.js";
import User from "../lib/models/users.js";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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

// Passport stuff:
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/<callback>",
    },
    function (accesstoken, refreshToken, profile, cb) {
      console.log(profile);
      User.findOrCreate({ googleId: profileid }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

app.get("/api/login", (req, res) => {
  console.log("Someone fetched /api/login");
});

app.post("/api/login", (req, res) => {
  console.log("Someone posted to /api/login");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`Click here: http://localhost:${process.env.PORT}`);
});

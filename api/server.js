import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import mongoose from "mongoose";

import session from "express-session";
import passport from "passport";
import passportLocalMongoose from "passport-local-mongoose";
import passportGoogleOAuth from "passport-google-oauth20";
const GoogleStrategy = passportGoogleOAuth.Strategy;
import findOrCreate from "mongoose-findorcreate";

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

// Import database models
import User from "./models/users.js";

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

// Middleware
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

// Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Passport stuff:
passport.use(User.createStrategy());
passport.serializeUser(function (user, done) {
  console.log("Serialized...");
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  console.log(id);
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

import router from "./routes.js";
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Click here: http://localhost:${port}`);
});

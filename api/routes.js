import express from "express";
const router = express.Router();
import passport from "passport";
import User from "./models/users.js";

router.get("/api/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

router.post("/api/login", (req, res) => {
  const user = new User({
    username: req.body.email,
    password: req.body.password,
  });

  console.log(req.user);
  req.login(user, function (err) {
    if (err) {
      console.log("Login Failed");
      res.sendStatus(400);
    } else {
      passport.authenticate("local")(req, res, function () {
        console.log("Login Success");
        res.sendStatus(200);
      });
    }
  });
});

router.post("/api/register", (req, res) => {
  User.register(
    { username: req.body.email },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        passport.authenticate("local")(req, res, function () {
          console(req.body.email + " is registered.");
          res.sendStatus(201);
        });
      }
    }
  );
  //   console.log("Someone posted to /api/register");
  //   console.log(req.body);
  res.end("Success");
});

export default router;
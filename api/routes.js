// Express imports:
const express = require("express");
const router = express.Router();

// Model imports:
const Product = require("../lib/models/products.js");
const User = require("../lib/models/user");

// Firebase imports:
const auth = require("../lib/admin");
const { GiTank } = require("react-icons/gi");

// Routes: Get
router.get("/products", async (req, res) => {
  const allProducts = await Product.find({});
  res.send(allProducts);
});

router.get("/products/:id", async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  res.send(product);
});

// Routes: Post
router.post("/testToken", async (req, res) => {
  // Test
  const currentUser = req.currentUser;

  if (currentUser) {
    console.log("Authenticated UID:", currentUser.uid);

    return res.status(200).send("Nice");
    // return res.send("Hi, from within the /testToken router POST");
  }
  return res.status(403).send("Not authorized");
});

router.post("/register", async (req, res) => {
  const currentUser = req.currentUser;

  if (currentUser) {
  }
});

// router.get("/api/logout", (req, res) => {
//   req.logout();
//   res.sendStatus(200);
// });

// router.post("/api/login", (req, res) => {
//   const user = new User({
//     username: req.body.email,
//     password: req.body.password,
//   });

//   console.log(req.user);
//   req.login(user, function (err) {
//     if (err) {
//       console.log("Login Failed");
//       res.sendStatus(400);
//     } else {
//       passport.authenticate("local")(req, res, function () {
//         console.log("Login Success");
//         res.sendStatus(200);
//       });
//     }
//   });
// });

// router.post("/api/register", (req, res) => {
//   User.register(
//     { username: req.body.email },
//     req.body.password,
//     function (err, user) {
//       if (err) {
//         console.log(err);
//         res.sendStatus(400);
//       } else {
//         passport.authenticate("local")(req, res, function () {
//           console(req.body.email + " is registered.");
//           res.sendStatus(201);
//         });
//       }
//     }
//   );
//   //   console.log("Someone posted to /api/register");
//   //   console.log(req.body);
//   res.end("Success");
// });

module.exports = router;

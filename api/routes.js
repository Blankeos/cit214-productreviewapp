// Express imports:
const express = require("express");
const router = express.Router();

// Model imports:
const Product = require("../lib/models/products.js");
const User = require("../lib/models/user");



// Firebase imports:
const auth = require("../lib/admin");

// Routes: GET
router.get("/products", async (req, res) => {
  // returns all products in database
  const allProducts = await Product.find({});
  res.send(allProducts);
});

router.get("/products/:id", async (req, res) => {
  // returns a specific product from a database using id
  const product = await Product.findOne({ _id: req.params.id });
  res.send(product);
});

router.get("/profile", async (req, res) => {
  // returns current user's profile details
  const currentUser = req.currentUser;

  if (currentUser) {
    try {
      // FETCH User Record
      const userRecord = await auth.getUser(currentUser.uid); // Firebase Record
      const userDocument = await User.findOne({ uid: currentUser.uid }); // MongoDB Document

      // CREATE the object to send to user
      const result = {
        uid: userRecord.uid,
        displayName: userRecord.displayName,
        bio: userDocument.bio,
      };
      // SUCCESS
      return res.send(result);
    } catch (err) {
      console.log(err.message);
      return res.status(400).send("Failed to add record");
    }
  }
  return res.status(401).send("Not authorized.");
});

// Routes: POST
router.post("/testToken", async (req, res) => {
  const currentUser = req.currentUser;
  if (currentUser) {
    try {
      const record = await auth.getUser(currentUser.uid);
      console.log(record);
    } catch (err) {
      console.log("err");
    }

    if (currentUser) {
      console.log("Authenticated UID:", currentUser.uid);

      return res.status(200).send("Nice");
      // return res.send("Hi, from within the /testToken router POST");
    }
  }
});

<<<<<<< HEAD
// router.get("/api/logout", (req, res) => {
//   req.logout();
//   res.sendStatus(200);
// });
=======
router.post("/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const displayName = req.body.displayName;

  console.log(email, password, displayName);
  try {
    // Create a Firebase Record
    const userRecord = await auth.createUser({
      email: email,
      emailVerified: false,
      password: password,
      displayName: displayName,
      disabled: false,
    });

    // Create a MongoDB Document
    await User.create({
      uid: userRecord.uid,
      bio: `Nice to meet you here on Cafe.ly! I'm ${userRecord.displayName}.`,
    });

    return res.status(200).send();
  } catch (err) {
    console.log("May error pre");
    return res.status(400).send("Can't create user record in firebase.");
  }
  // Create Firebase Record
  // await auth
  //   .createUser({
  //     email: email,
  //     emailVerified: false,
  //     phoneNumber: null,
  //     password: password,
  //     displayName: displayName,
  //     photoURL: null,
  //     disabled: false,
  //   })
  //   .then((userRecord) => {
  //     console.log("Successfully created record.");
  //     User.create({
  //       uid: userRecord.uid,
  //       bio: `Nice to meet you here on Cafe.ly! I'm ${userRecord.displayName}.`,
  //     })
  //       .then(() => {
  //         console.log("Created new user!");
  //         return res.status(200).send();
  //       })
  //       .catch((err) => {
  //         console.log("Failed to create user in Mongo.");
  //         return res.status(400).send("Failed to add document in MongoDB");
  //       });
  //   })
  //   .catch((err) => {
  //     console.log("Failed to add record to Firebase");
  //     return res.status(400).send("Failed to add record in Firebase");
  //   });
  // return res.status(400).send("Server failed.");
});
>>>>>>> backend

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

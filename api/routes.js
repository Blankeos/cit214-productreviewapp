// Express imports:
const express = require("express");
const router = express.Router();
const ObjectId = require("mongoose").Types.ObjectId;
// Model imports:
const Product = require("../lib/models/products.js");
const User = require("../lib/models/user");
const Rating = require("../lib/models/rating");

// Firebase imports:
const auth = require("../lib/admin");

// Routes: GET
router.get("/products", async (req, res) => {
  // returns all products in database
  let allProducts;
  if (req.query.sortByRating == -1) {
    allProducts = await Product.find({}).sort({ averageRating: -1 });
    console.log("Descending sort Products.");
  } else if (req.query.sortByRating == 1) {
    allProducts = await Product.find({}).sort({ averageRating: 1 });
    console.log("Ascending sort Products.");
  } else {
    allProducts = await Product.find({});
    console.log(typeof req.query.sortByRating);
  }

  res.send(allProducts);
});

//  Obsolete
router.get("/productSearch", async (req, res) => {
  let searchResults;

  searchResults = await Product.find(
    { $text: { $search: req.query.name } },
    { score: { $meta: "textScore" } }
  ).sort({ score: { $meta: "textScore" } });

  // if search results don't have length (they're empty)
  if (!searchResults.length) {
    searchResults = await Product.find({
      name: { $regex: req.query.name, $options: "i" },
    });
  }

  res.send(searchResults);
});

router.get("/products/:id", async (req, res) => {
  // returns a specific product from a database using id
  const productID = req.params.id;
  const product = await Product.findOne({ _id: productID });

  return res.send(product);
});

router.get("/productsAndRatings/:id", async (req, res) => {
  // returns a specific product from a database using id
  const productID = ObjectId(req.params.id);
  const product = await Product.findOne({ _id: productID });

  const productRatings = await Rating.aggregate([
    {
      $match: { productID: productID },
    },
    {
      $sort: { updated: -1 },
    },
    {
      $lookup: {
        from: "users",
        localField: "userUID",
        foreignField: "uid",
        as: "user",
      },
    },
  ]);

  const result = {
    product,
    productRatings,
  };
  res.send(result);
});

router.get("/profile", async (req, res) => {
  // returns current user's profile details
  const currentUser = req.currentUser;

  if (currentUser) {
    let userRecord;
    let userDocument;
    let userRatings;
    try {
      // FETCH User Record
      userRecord = await auth.getUser(currentUser.uid); // Firebase Record
    } catch (err) {
      console.log(err.message);
      return res.status(400).send("Failed to fetch userRecord. (FIREBASE)");
    }
    try {
      // Fetch User Document
      userDocument = await User.findOne({ uid: currentUser.uid }); // MongoDB Document
    } catch (err) {
      console.log(err.message);
      return res.status(400).send("Failed to fetch userDocument. (MongoDB)");
    }
    try {
      // Fetch User's Reviews
      userRatings = await Rating.find({ userUID: currentUser.uid })
        .sort({
          updated: "desc",
        })
        .populate("productID", ["name", "images"]);
    } catch (err) {
      console.log(err.message);
      return res
        .status(400)
        .send("Failed to fetch user's ratings & reviews. (MongoDB)");
    }

    try {
      // CREATE the object to SEND to user
      const result = {
        uid: userRecord.uid,
        displayName: userRecord.displayName,
        bio: userDocument.bio,
        userRatings: userRatings,
      };

      // SUCCESS
      return res.send(result);
    } catch (err) {
      console.log(err.message);
      return res.status(400).send("Failed to send profile result.");
    }
  }
  return res.status(401).send("Not authorized.");
});

// Routes: POST
router.post("/addReview", async (req, res) => {
  const currentUser = req.currentUser;
  const productID = req.body.productID;
  const rating = req.body.rating;
  const review = req.body.review;

  if (!productID)
    return res.status(400).send("Bad Request. Product ID is empty.");
  if (!rating) return res.status(400).send("Bad Request. Rating is empty.");

  if (currentUser) {
    // Authorized
    let userRecord;
    try {
      // FETCH User Record
      userRecord = await auth.getUser(currentUser.uid); // Firebase Record
    } catch (err) {
      console.log(err.message);
      return res.status(400).send("Failed to fetch userRecord. (FIREBASE)");
    }

    let resMessage = "";
    try {
      // FETCH Rating Document and check if user.uid & productid have one document already
      ratingDocument = await Rating.findOne({
        userUID: currentUser.uid,
        productID: productID,
      }); // MongoDB Document

      // if userDocument is null, let's create a new document
      if (!ratingDocument) {
        // No existing review found. CREATE one.
        await Rating.create({
          userUID: userRecord.uid,
          productID: productID,
          rating: rating,
          review: review,
        });
        resMessage = "Created a new review for this product by this user.";
      } else {
        // Existing review found. Update it.
        await Rating.updateOne(
          {
            userUID: userRecord.uid,
            productID: productID,
          },
          {
            userUID: userRecord.uid,
            productID: productID,
            rating: rating,
            review: review,
            updated: Date.now(),
          }
        );
        resMessage = "Existing review found. Review has been updated.";
      }
      await updateAverageRatings(productID);

      return res.status(201).send(resMessage);
    } catch (err) {
      console.log(err.message);
      return res.status(400).send("Failed to create/update review.");
    }
  }
  return res.status(401).send("Not authorized.");
});
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

      return res.status(201).send("Nice");
      // return res.send("Hi, from within the /testToken router POST");
    }
  }
  return res.status(403).send("Not authorized");
});

router.post("/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const displayName = req.body.displayName;

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
      displayName: userRecord.displayName,
      bio: `👋 Nice to meet you here on Cafe.ly! I'm ${userRecord.displayName}.`,
    });

    return res.status(201).send("Account is created! Nice job.");
  } catch (err) {
    console.log(
      "Could not create the account. May be a Firebase or MongoDB issue."
    );
    return res
      .status(400)
      .send("Can't create user record in firebase/mongodb.");
  }
});

// Utility Functions
const updateAverageRatings = async (_productID) => {
  const productID = ObjectId(_productID); // convert string to ObjectID
  const averageRatingQuery = await Rating.aggregate([
    {
      $match: { productID: productID },
    },
    {
      $group: {
        _id: "$productID",
        averageRating: {
          $avg: "$rating",
        },
        ratingCount: {
          $sum: 1,
        },
      },
    },
  ]);

  const reviewCountQuery = await aggregateReviewCount(_productID);

  console.log("Average Rating:", averageRatingQuery[0].averageRating);
  console.log("Rating Count", averageRatingQuery[0].ratingCount);
  console.log("Review Count", reviewCountQuery[0].reviewCount);

  await Product.updateOne(
    { _id: productID },
    {
      $set: {
        ratingCount: averageRatingQuery[0].ratingCount,
        reviewCount: reviewCountQuery[0].reviewCount,
        averageRating: averageRatingQuery[0].averageRating,
      },
    }
  )
    .then(() => {
      console.log("Successfully Updated Average Ratings.");
    })
    .catch(() => {
      console.log("Failed to Update Average Ratings.");
    });
};

const aggregateReviewCount = async (_productID) => {
  const productID = ObjectId(_productID);
  const reviewCountQuery = await Rating.aggregate([
    {
      $match: { productID: productID },
    },
    {
      $match: {
        review: { $ne: null },
        $expr: { $gt: [{ $strLenCP: "$review" }, 0] },
      },
    },
    {
      $group: {
        _id: "$productID",
        reviewCount: {
          $sum: 1,
        },
      },
    },
  ]);
  return reviewCountQuery;
};

router.get("/updateUserInfo", async (req, res) => {
  await updateAllUserInfo();
  // res.send(output);
  res.send("Successfully finished updating them users yo.");
});

const updateAllUserInfo = async () => {
  const allUsers = await User.find({});

  console.log(typeof allUsers);
  // return allUsers;
  allUsers.forEach(async (user) => {
    try {
      let firebaseUser = await auth.getUser(user.uid);
      console.log(`Found ${firebaseUser.displayName}`);

      await User.updateOne(
        { uid: user.uid },
        {
          $set: {
            photoURL: firebaseUser.photoURL,
            displayName: firebaseUser.displayName,
          },
        }
      );

      console.log(`Updated ${firebaseUser.displayName}`);
    } catch (err) {
      console.log(err.message);
    }
  });
};

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

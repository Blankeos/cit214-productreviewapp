const mongoose = require("mongoose");

// Schema
const ratingSchema = new mongoose.Schema({
  userUID: String, // user's UID
  productID: String, // product's ID
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  review: String,
  updated: { type: Date, default: Date.now },
});

// Model
const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;

const mongoose = require("mongoose");

// Schema
const ratingSchema = new mongoose.Schema({
  userUID: {
    type: String,
    ref: "User",
    required: true,
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
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

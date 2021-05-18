const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: Array,
  averageRating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

// Adding index plugin to fields
productSchema.index({ name: "text", description: "text" });

// Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;

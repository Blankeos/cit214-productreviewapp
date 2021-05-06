const mongoose = require("mongoose");

// Schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: Array,
});

// Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;

const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  uid: String,
  bio: String,
});

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;

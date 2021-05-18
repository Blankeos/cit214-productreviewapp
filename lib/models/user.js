const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  bio: String,
});

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;

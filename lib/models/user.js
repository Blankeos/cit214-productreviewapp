const mongoose = require("mongoose");

// Schema
const userSchema = new mongoose.Schema({
  photoURL: {
    type: String,
  },
  displayName: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  bio: String,
  uniqueLink: {
    type: String,
  },
  dateJoined: { type: Date, default: Date.now },
});

// Adding index plugin to fields
userSchema.index({ displayName: "text" });

// Model
const User = mongoose.model("User", userSchema);

module.exports = User;

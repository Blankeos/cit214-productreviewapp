import mongoose from "mongoose";
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

// Schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please check entry. No email specified."],
  },
  password: {
    type: String,
    required: [true, "Please check entry. No password specified."],
  },
  googleId: String,
});

// Plugins
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// Model
export const User = mongoose.model("User", userSchema);

// export default User;

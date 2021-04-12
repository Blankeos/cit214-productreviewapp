import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

// Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  googleId: String,
});

// Plugins
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// Model
const User = mongoose.model("User", userSchema);

export default User;

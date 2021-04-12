// Importing modules
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");

// Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err.message));

export default mongoose;

// ///-------///
// Mongoose schema - specifications of the content of each document entry
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check entry. No name specified"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: [true, "Please check entry. No rating specified"],
  },
  review: String,
});

// Mongoose model is created from schema ("Singular", schema) //basically a collection
// const Product = mongoose.model("Product", productSchema);

// testEntry.save();

// Product.find({})
//   .then((items) => {
//     items.forEach((i) => console.log(i.name));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const testEntry = new Product({
//   rating: 5,
//   review: "Another delicious coffee.",
// });
